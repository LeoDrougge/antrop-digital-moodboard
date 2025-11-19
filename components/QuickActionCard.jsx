import './QuickActionCard.css';

export function QuickActionCard({ actions }) {
  return (
    <div className="quick-action-card">
      <div className="quick-action-card__title">Get Started</div>
      <div className="quick-action-card__list">
        {actions.map((action, index) => (
          <div key={index} className="quick-action-card__item">
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}

