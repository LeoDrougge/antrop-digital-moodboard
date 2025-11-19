import './ActivityCard.css';

export function ActivityCard({ activities }) {
  return (
    <div className="activity-card">
      <div className="activity-card__title">What's Happening</div>
      <div className="activity-card__list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card__item">
            <div className="activity-card__time">{activity.time}</div>
            <div className="activity-card__text">{activity.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

