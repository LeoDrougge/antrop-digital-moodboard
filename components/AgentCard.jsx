import './AgentCard.css';

export function AgentCard({ name, status, tasks }) {
  return (
    <div className="agent-card">
      <div className="agent-card__name">{name}</div>
      <div className="agent-card__status">{status}</div>
      <div className="agent-card__tasks">{tasks} tasks</div>
    </div>
  );
}

