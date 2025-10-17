import { resources } from '../data/content';
import './Pages.css';

const Resources = () => {
  return (
    <div className="page">
      <h1>Resources</h1>
      <p>Documentation, contacts, and reference materials for follow-up.</p>

      <div className="card">
        <h2>{resources.security.title}</h2>
        <ul>
          {resources.security.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>{resources.api.title}</h2>
        <ul>
          {resources.api.items.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#b794f4', textDecoration: 'underline' }}
              >
                {item.text}
              </a>
              {item.note && <span style={{ color: '#888', fontSize: '0.9rem' }}> - {item.note}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>{resources.integration.title}</h2>
        <ul>
          {resources.integration.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
