import { openingScript } from '../data/content';
import './Pages.css';

const OpeningScript = () => {
  return (
    <div className="page">
      <h1>Opening Script: The First 5 Minutes</h1>
      <p className="lead">
        The opening sets the tone for the entire conversation. Your goal: establish yourself as a facilitator, not a presenter, and gather intelligence on what matters most.
      </p>

      <div className="card">
        <h2>{openingScript.slide1.title}</h2>
        <div className="example-box">
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
            {openingScript.slide1.script}
          </p>
        </div>
        <h3>Why This Works</h3>
        <ul>
          {openingScript.slide1.whyThisWorks.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="alert alert-info" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginTop: 0, color: '#3498db' }}>💡 Pro Tip: {openingScript.slide2.title}</h3>
        <p><strong>Goal:</strong> {openingScript.slide2.goal}</p>

        <h4 style={{ marginTop: '1rem' }}>Talk Track</h4>
        <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
          {openingScript.slide2.talkTrack}
        </p>

        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div>
            <h4 className="azure-title" style={{ marginTop: 0 }}>For Azure Customers (New)</h4>
            <p style={{ fontSize: '0.95rem' }}>{openingScript.slide2.azure}</p>
          </div>
          <div>
            <h4 className="legacy-title" style={{ marginTop: 0 }}>For Legacy Customers (Existing)</h4>
            <p style={{ fontSize: '0.95rem' }}>{openingScript.slide2.legacy}</p>
          </div>
        </div>

        <p style={{ marginTop: '1rem', marginBottom: 0, fontWeight: 600 }}>
          ⚠️ {openingScript.slide2.warning}
        </p>
      </div>

      <div className="card">
        <h2>{openingScript.slide3.title}</h2>
        <div className="example-box">
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
            {openingScript.slide3.script}
          </p>
        </div>
        <h3>Check-In Question</h3>
        <div className="example-box">
          <p><em>{openingScript.slide3.checkIn}</em></p>
        </div>
      </div>
    </div>
  );
};

export default OpeningScript;
