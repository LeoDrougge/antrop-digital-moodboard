import './MetricCard.css';

export function MetricCard({ label, value, change }) {
  return (
    <div className="metric-card">
      <div className="metric-card__label">{label}</div>
      <div className="metric-card__value">{value}</div>
      {change && (
        <div className="metric-card__change">{change}</div>
      )}
    </div>
  );
}

