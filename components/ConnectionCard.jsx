import { useState } from 'react';
import './ConnectionCard.css';

export function ConnectionCard({ name, logo, connected: initialConnected = false }) {
  const [connected, setConnected] = useState(initialConnected);
  const [justActivated, setJustActivated] = useState(false);

  const handleToggle = () => {
    const wasInactive = !connected;
    setConnected(!connected);
    
    if (wasInactive) {
      setJustActivated(true);
      setTimeout(() => {
        setJustActivated(false);
      }, 600);
    }
  };

  return (
    <div className="connection-card">
      <img src={logo} alt="" className="connection-card__logo" />
      <div className="connection-card__content">
        <div className="connection-card__name">{name}</div>
        <div className={`connection-card__status ${justActivated ? 'connection-card__status--flash' : ''}`}>
          {connected ? 'Connected' : 'Not connected'}
        </div>
      </div>
      <button 
        className={`connection-card__slider ${connected ? 'connection-card__slider--active' : ''}`}
        onClick={handleToggle}
        aria-label={connected ? 'Disconnect' : 'Connect'}
      >
        <div className="connection-card__slider-track">
          <div className="connection-card__slider-thumb">
            {connected ? (
              <img src="/assets/icons/check.svg" alt="" className="connection-card__icon" />
            ) : (
              <img src="/assets/icons/arrow-right.svg" alt="" className="connection-card__icon" />
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

