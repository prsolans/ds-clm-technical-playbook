import { useState, useEffect } from 'react';
import { preMeetingPrep } from '../data/content';
import './Pages.css';

const PreMeetingPrep = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('prepChecklistState');
    return saved ? JSON.parse(saved) : {};
  });

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    localStorage.setItem('prepChecklistState', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
    localStorage.removeItem('prepChecklistState');
  };

  const mustKnowChecked = preMeetingPrep.mustKnow.items.filter((_, i) => checkedItems[`must-${i}`]).length;
  const mustKnowTotal = preMeetingPrep.mustKnow.items.length;
  const isReady = mustKnowChecked === mustKnowTotal;
  const percentage = Math.round((mustKnowChecked / mustKnowTotal) * 100);

  const renderChecklistSection = (
    priority: 'must' | 'should' | 'nice',
    section: typeof preMeetingPrep.mustKnow,
    icon: string,
    defaultCollapsed = false
  ) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const items = section.items;
    const checked = items.filter((_, i) => checkedItems[`${priority}-${i}`]).length;
    const remaining = items.length - checked;

    return (
      <div className={`checklist-section ${collapsed ? 'collapsed' : ''}`}>
        <div className="checklist-header" onClick={() => setCollapsed(!collapsed)}>
          <div className="checklist-title">
            <span className="section-icon">{icon}</span>
            <span>{section.title}</span>
            {remaining > 0 && <span className="remaining">({remaining} remaining)</span>}
          </div>
          <div className="checklist-progress">
            <span>{checked}/{items.length}</span>
            <span className="collapse-icon">{collapsed ? '▶' : '▼'}</span>
          </div>
        </div>

        {!collapsed && (
          <div className="checklist-items">
            {items.map((item, i) => {
              const id = `${priority}-${i}`;
              const isChecked = checkedItems[id] || false;
              const isExpanded = expandedItems[id] || false;

              return (
                <div key={id} className={`checklist-item ${isChecked ? 'checked' : ''}`}>
                  <div className="item-row">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(id)}
                      className="checkbox"
                    />
                    <label onClick={() => toggleExpand(id)} className="item-label">
                      {item.label}
                      {item.detail && <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>}
                    </label>
                  </div>
                  {item.detail && isExpanded && (
                    <div className="item-detail">{item.detail}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page">
      <h1>Pre-Meeting Prep</h1>
      <p>Click items to check off. Click labels to see details.</p>

      <div className={`status-bar ${isReady ? 'ready' : 'not-ready'}`}>
        <div className="status-text">
          {isReady ? `✓ READY: ${mustKnowChecked}/${mustKnowTotal}` : `NOT READY: ${mustKnowChecked}/${mustKnowTotal}`}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }} />
        </div>
        <div className="progress-percentage">{percentage}%</div>
        <button onClick={resetChecklist} className="btn-reset">↺ Reset</button>
      </div>

      <div className="prep-grid">
        <div className="prep-main">
          {renderChecklistSection('must', preMeetingPrep.mustKnow, '🔴', false)}
          {renderChecklistSection('should', preMeetingPrep.shouldKnow, '🟡', true)}
          {renderChecklistSection('nice', preMeetingPrep.niceToKnow, '🟢', true)}
        </div>

        <div className="prep-sidebar">
          <div className="day-of-checklist">
            <div className="day-of-header">{preMeetingPrep.dayOfChecklist.title}</div>
            {preMeetingPrep.dayOfChecklist.items.map((item, i) => {
              const id = `dayof-${i}`;
              const isChecked = checkedItems[id] || false;

              return (
                <div key={id} className={`day-of-item ${isChecked ? 'checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(id)}
                    className="checkbox"
                  />
                  <label className="day-of-label">{item}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreMeetingPrep;
