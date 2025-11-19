import { useState, useEffect } from 'react';
import { GRID } from '../tokens.js';
import './GridOverlay.css';

export function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Toggle with 'G' key
      if (e.key === 'g' || e.key === 'G') {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="grid-overlay">
      <div className="grid-overlay__pattern" />
      <div className="grid-overlay__label">
        Grid overlay (24×24) — Press 'G' to toggle
      </div>
    </div>
  );
}

