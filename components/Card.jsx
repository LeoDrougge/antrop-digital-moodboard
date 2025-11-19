import './Card.css';

export function Card({ title, children, fixedHeight, bare }) {
  return (
    <div className={`card ${fixedHeight ? 'card--fixed-height' : ''} ${bare ? 'card--bare' : ''}`}>
      {title && <h2 className="card__title">{title}</h2>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}

