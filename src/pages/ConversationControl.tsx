import { useState } from 'react';
import { conversationControl } from '../data/content';
import './Pages.css';

const ConversationControl = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="page">
      <h1>Conversation Control Techniques</h1>
      <p>Tools for managing the meeting flow and handling unexpected situations. Click each technique to expand.</p>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 1 ? null : 1)}
        >
          <h2 className="accordion-title">{conversationControl.parkingLot.title}</h2>
          <span className="accordion-icon">{expandedId === 1 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 1 && (
          <div className="accordion-content">
            <div className="alert alert-info">
              <strong>Template:</strong> {conversationControl.parkingLot.template}
            </div>

            <h3>Examples:</h3>
            {conversationControl.parkingLot.examples.map((ex, i) => (
              <div key={i} className="example-box">
                {ex.question && <p><strong>Their Q:</strong> "{ex.question}"</p>}
                <p><strong>Your response:</strong> "{ex.response}"</p>
                <button className="btn-copy" onClick={() => copyToClipboard(ex.response)}>
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 2 ? null : 2)}
        >
          <h2 className="accordion-title">{conversationControl.pivot.title}</h2>
          <span className="accordion-icon">{expandedId === 2 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 2 && (
          <div className="accordion-content">
            <h3>Examples:</h3>
            <ul>
              {conversationControl.pivot.examples.map((ex, i) => (
                <li key={i}>"{ex.response}"</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setExpandedId(expandedId === 3 ? null : 3)}
        >
          <h2 className="accordion-title">{conversationControl.exit.title}</h2>
          <span className="accordion-icon">{expandedId === 3 ? '▼' : '▶'}</span>
        </div>
        {expandedId === 3 && (
          <div className="accordion-content">
            <div className="alert alert-info">
              <strong>Template:</strong> {conversationControl.exit.template}
            </div>

            <h3>Examples:</h3>
            {conversationControl.exit.examples.map((ex, i) => (
              <div key={i} className="example-box">
                {ex.question && <p><strong>Their Q:</strong> "{ex.question}"</p>}
                <p><strong>Your response:</strong> "{ex.response}"</p>
                <button className="btn-copy" onClick={() => copyToClipboard(ex.response)}>
                  Copy
                </button>
              </div>
            ))}

            <h3>After Using Exit:</h3>
            <ol>
              {conversationControl.exit.afterUsing?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationControl;
