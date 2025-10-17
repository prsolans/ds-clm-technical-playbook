import { useState } from 'react';
import { closingTheMeeting } from '../data/content';
import './Pages.css';

const ClosingTheMeeting = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="page">
      <h1>Closing the Meeting</h1>
      <p className="lead">
        The close is where you secure next steps and uncover hidden concerns. Don't rush this - it's as important as the opening.
      </p>

      <div className="card">
        <h2>Closing Checklist</h2>
        <p>Make sure you accomplish all four of these before the meeting ends:</p>
        <ul>
          {closingTheMeeting.checklist.map((item, i) => (
            <li key={i} style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 1 ? null : 1)}
        >
          <h2 className="accordion-title">1. Review Parking Lot Items</h2>
          <span className="accordion-icon">{expandedId === 1 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 1 && (
          <div className="accordion-content">
            <div className="example-box">
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {closingTheMeeting.script.reviewParkingLot}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 2 ? null : 2)}
        >
          <h2 className="accordion-title">2. Check-Ins: Surface Any Remaining Concerns</h2>
          <span className="accordion-icon">{expandedId === 2 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 2 && (
          <div className="accordion-content">
            <p>Go through each major area systematically:</p>
            <div className="example-box">
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {closingTheMeeting.script.checkIns}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 3 ? null : 3)}
        >
          <h2 className="accordion-title">3. The Most Important Question</h2>
          <span className="accordion-icon">{expandedId === 3 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 3 && (
          <div className="accordion-content">
            <p>This question surfaces concerns they haven't voiced yet:</p>
            <div className="example-box" style={{ background: '#3a2a4a', borderLeftColor: '#7B2FBE' }}>
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {closingTheMeeting.script.surfaceHiddenConcerns}
              </p>
            </div>
            <div className="alert alert-warning" style={{ marginTop: '1rem' }}>
              <strong>⚠️ Critical:</strong> After asking this question, WAIT. Don't fill the silence. The first person who speaks loses. Let them think and respond. The concerns that come out here are often the real blockers.
            </div>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 4 ? null : 4)}
        >
          <h2 className="accordion-title">4. Confirm Next Steps & Timeline</h2>
          <span className="accordion-icon">{expandedId === 4 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 4 && (
          <div className="accordion-content">
            <h3 style={{ marginTop: 0 }}>Next Steps</h3>
            <div className="example-box">
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {closingTheMeeting.script.nextSteps}
              </p>
            </div>

            <h3 style={{ marginTop: '1.5rem' }}>Timeline Commitment</h3>
            <div className="example-box">
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {closingTheMeeting.script.timelineCommitment}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
        <strong>💡 Pro Tip:</strong> The meeting isn't over until you've documented your follow-up commitments. Before you close your laptop, send a quick summary email or Slack message with:
        <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <li>What you committed to deliver and by when</li>
          <li>What you need from them</li>
          <li>Next meeting date/time (if scheduled)</li>
        </ul>
      </div>
    </div>
  );
};

export default ClosingTheMeeting;
