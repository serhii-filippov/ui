import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <span style={{ color: '#3366FF', fontWeight: 'bold', fontSize: '24px' }}>Opendoor</span>
      </div>
      <nav className="navigation">
        <button className="nav-button">
          <span role="img" aria-label="search">🔍</span>
        </button>
        <button className="nav-button">Recommended listings</button>
        <button className="nav-button">Also selling?</button>
        <div className="dropdown">
          <button className="nav-button">
            More <span role="img" aria-label="chevron">▾</span>
          </button>
        </div>
        <button className="sign-in-button">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;