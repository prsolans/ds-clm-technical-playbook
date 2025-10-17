import { useState } from 'react';
import { objectionHandling } from '../data/content';
import './Pages.css';

const ObjectionHandling = () => {
  const [filter, setFilter] = useState<'all' | 'Security' | 'Availability' | 'Integration'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredObjections = filter === 'all'
    ? objectionHandling
    : objectionHandling.filter(o => o.category === filter);

  const categories = ['Security', 'Availability', 'Integration'] as const;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="page">
      <h1>Objection Handling</h1>
      <p>Common questions and proven responses. Click a category to filter, or search for specific topics.</p>

      <div className="filter-group">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="objections-list">
        {filteredObjections.map((obj, i) => (
          <div key={i} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => setExpandedId(expandedId === i ? null : i)}
            >
              <div>
                <span className={`badge badge-${obj.category.toLowerCase()}`}>
                  {obj.category}
                </span>
                <h4 className="accordion-title">{obj.question}</h4>
              </div>
              <span className="accordion-icon">{expandedId === i ? '▼' : '▶'}</span>
            </div>

            {expandedId === i && (
              <div className="accordion-content">
                <p className="objection-answer">{obj.answer}</p>
                <button
                  className="btn-copy"
                  onClick={() => copyToClipboard(obj.answer)}
                >
                  Copy Response
                </button>
                {obj.relatedSlides && obj.relatedSlides.length > 0 && (
                  <p className="related-slides">
                    <strong>Related Slides:</strong> {obj.relatedSlides.join(', ')}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectionHandling;
