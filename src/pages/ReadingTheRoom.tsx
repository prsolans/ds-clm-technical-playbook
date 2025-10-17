import { readingTheRoom } from '../data/content';
import './Pages.css';

const ReadingTheRoom = () => {
  return (
    <div className="page">
      <h1>Reading the Room & Recovery</h1>
      <p className="lead">
        Learn to recognize when you're losing the audience and how to recover. The best presenters adjust in real-time based on what they observe.
      </p>

      <div className="card">
        <h2>Signals You're Losing Them</h2>
        <p>Watch for these warning signs and act immediately:</p>

        <table style={{ marginTop: '1.5rem' }}>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Signal</th>
              <th style={{ width: '30%' }}>What It Means</th>
              <th style={{ width: '45%' }}>Recovery Script</th>
            </tr>
          </thead>
          <tbody>
            {readingTheRoom.losingThem.map((item, i) => (
              <tr key={i}>
                <td style={{ verticalAlign: 'top', fontWeight: 600, color: '#e74c3c' }}>
                  {item.signal}
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  {item.meaning}
                </td>
                <td style={{ verticalAlign: 'top', fontStyle: 'italic', color: '#b0e0b0' }}>
                  "{item.recovery}"
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#e74c3c' }}>🚨 The Emergency Brake</h2>
        <p><strong>Use when:</strong> {readingTheRoom.emergencyBrake.useWhen}</p>

        <div className="example-box" style={{ marginTop: '1rem' }}>
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
            {readingTheRoom.emergencyBrake.script}
          </p>
        </div>

        <h3 style={{ marginTop: '1.5rem' }}>Why This Works</h3>
        <ul>
          {readingTheRoom.emergencyBrake.whyThisWorks.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
          <strong>💡 Pro Tip:</strong> It's better to hit the emergency brake 15 minutes in and course-correct than to power through 45 minutes of irrelevant content. Your humility and responsiveness will build more trust than a perfect delivery of the wrong material.
        </div>
      </div>
    </div>
  );
};

export default ReadingTheRoom;
