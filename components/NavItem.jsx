import { useState } from 'react';
import './NavItem.css';

export function NavItem({ label = 'Explore tasks', icon = '/assets/icons/bolt.svg', active: initialActive = false }) {
  const [active, setActive] = useState(initialActive);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div 
      className={`nav-item ${active ? 'nav-item--active' : ''}`}
      onClick={handleClick}
    >
      <div className="nav-item__icon-container">
        <div className="nav-item__hexagon">
          <svg className="nav-item__hexagon-shape" width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_794_707)">
              <path d="M18.9998 0L38.0524 11V33L18.9998 44L-0.0527344 33V11L18.9998 0Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_794_707">
                <rect width="38" height="44" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <img src={icon} alt="" className="nav-item__icon" />
        </div>
      </div>
      <p className="nav-item__label">{label}</p>
    </div>
  );
}

