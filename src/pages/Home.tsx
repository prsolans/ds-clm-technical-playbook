import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page">
      <h1>CLM Technical Playbook</h1>
      <p className="lead">Your guide to technical deep dive meetings on Security, Availability, and Integration</p>

      <div className="alert alert-info">
        <strong>About this playbook:</strong> This playbook helps Docusign SCs deliver effective technical presentations for CLM (Contract Lifecycle Management). Navigate using the sidebar to access pre-meeting prep, Azure vs Legacy guidance, objection handling, and conversation control techniques.
      </div>

      <div className="card-grid">
        <Link to="/prep" className="nav-card">
          <h3>Pre-Meeting Prep</h3>
          <p>Essential checklist before any technical deep dive. Know your deployment model, audience, and key requirements.</p>
        </Link>

        <Link to="/azure-vs-legacy" className="nav-card">
          <h3>Azure vs Legacy</h3>
          <p>Quick reference for deployment models. Understand when to use Azure vs Legacy story.</p>
        </Link>

        <Link to="/objections" className="nav-card">
          <h3>Objection Handling</h3>
          <p>Common questions and proven responses for security, availability, and integration concerns.</p>
        </Link>

        <Link to="/conversation-control" className="nav-card">
          <h3>Conversation Control</h3>
          <p>Techniques for managing the meeting flow: Parking Lot, Pivot, and Exit strategies.</p>
        </Link>

        <Link to="/resources" className="nav-card">
          <h3>Resources</h3>
          <p>Documentation links, API references, and internal contacts for escalation.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
