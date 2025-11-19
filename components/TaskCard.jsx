import { useState } from 'react';
import './TaskCard.css';

export function TaskCard({ active: initialActive = false }) {
  const [active, setActive] = useState(initialActive);
  const [justActivated, setJustActivated] = useState(false);

  const handleToggle = () => {
    const wasInactive = !active;
    setActive(!active);
    
    if (wasInactive) {
      setJustActivated(true);
      setTimeout(() => {
        setJustActivated(false);
      }, 600);
    }
  };

  return (
    <div className={`task-card ${active ? 'task-card--active' : ''}`}>
      <div className="task-card__content">
        {active ? (
          <>
            <div className={`task-card__title ${justActivated ? 'task-card__title--flash' : ''}`}>Running</div>
            <div className={`task-card__status ${justActivated ? 'task-card__status--flash' : ''}`}>9 out of 10 tasks completed</div>
          </>
        ) : (
          <>
            <div className="task-card__title">Inactive</div>
            <div className="task-card__description">Activate to let the agent monitor and optimize your campaign.</div>
          </>
        )}
      </div>
      <button 
        className={`task-card__button ${active ? 'task-card__button--active' : ''}`}
        onClick={handleToggle}
        aria-label={active ? 'Deactivate' : 'Activate'}
      >
        <div className="task-card__button-inner">
          <img src="/assets/icons/on-off.svg" alt="" className="task-card__button-icon" />
        </div>
      </button>
    </div>
  );
}

