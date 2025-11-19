import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './IconCard.css';

export function IconCard({ icon }) {
  const [animationData, setAnimationData] = useState(null);
  const isLottie = icon && icon.endsWith('.json');

  useEffect(() => {
    if (isLottie) {
      fetch(icon)
        .then(response => response.json())
        .then(data => setAnimationData(data))
        .catch(err => console.error('Error loading Lottie animation:', err));
    }
  }, [icon, isLottie]);

  return (
    <div className="icon-card">
      {isLottie ? (
        animationData ? (
          <Lottie 
            animationData={animationData}
            className="icon-card__lottie"
            loop={true}
            autoplay={true}
          />
        ) : (
          <div className="icon-card__placeholder" />
        )
      ) : (
        <img src={icon} alt="" className="icon-card__icon" />
      )}
    </div>
  );
}

