import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const [conversationOpen, setConversationOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;
  const isInConversationSection = ['/opening-script', '/reading-the-room', '/closing'].includes(location.pathname);

  return (
    <div className="layout">
      <header className="header">
        <h1>CLM Technical Playbook</h1>
        <p className="subtitle">Security, Availability & Integration Deep Dive</p>
      </header>

      <nav className="sidebar">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/prep" className={`nav-item ${isActive('/prep') ? 'active' : ''}`}>
          Pre-Meeting Prep
        </Link>

        <div className="nav-section">
          <div
            className={`nav-item nav-section-header ${isInConversationSection ? 'section-active' : ''}`}
            onClick={() => setConversationOpen(!conversationOpen)}
          >
            <span>The Conversation</span>
            <span className="section-arrow">{conversationOpen ? '▼' : '▶'}</span>
          </div>
          {conversationOpen && (
            <div className="nav-submenu">
              <Link to="/opening-script" className={`nav-item nav-subitem ${isActive('/opening-script') ? 'active' : ''}`}>
                Opening Script
              </Link>
              <Link to="/reading-the-room" className={`nav-item nav-subitem ${isActive('/reading-the-room') ? 'active' : ''}`}>
                Reading the Room
              </Link>
              <Link to="/closing" className={`nav-item nav-subitem ${isActive('/closing') ? 'active' : ''}`}>
                Closing the Meeting
              </Link>
            </div>
          )}
        </div>

        <Link to="/azure-vs-legacy" className={`nav-item ${isActive('/azure-vs-legacy') ? 'active' : ''}`}>
          Azure vs Legacy
        </Link>
        <Link to="/objections" className={`nav-item ${isActive('/objections') ? 'active' : ''}`}>
          Objection Handling
        </Link>
        <Link to="/conversation-control" className={`nav-item ${isActive('/conversation-control') ? 'active' : ''}`}>
          Conversation Control
        </Link>
        <Link to="/resources" className={`nav-item ${isActive('/resources') ? 'active' : ''}`}>
          Resources
        </Link>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
