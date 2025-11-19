import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './DisplayTextWithIcons.css';

function InlineIcon({ icon }) {
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

  if (isLottie) {
    if (!animationData) {
      return <span className="display-text-with-icons__icon display-text-with-icons__icon-placeholder" />;
    }
    return (
      <span className="display-text-with-icons__icon display-text-with-icons__icon--lottie">
        <Lottie 
          animationData={animationData}
          className="display-text-with-icons__lottie"
          loop={true}
          autoplay={true}
        />
      </span>
    );
  }

  return (
    <span className="display-text-with-icons__icon">
      <img src={icon} alt="" className="display-text-with-icons__icon-img" />
    </span>
  );
}

export function DisplayTextWithIcons() {
  return (
    <div className="display-text-with-icons">
      <InlineIcon icon="/assets/animations/cogwheel.json" />
      <span className="display">Let</span>
      <InlineIcon icon="/assets/animations/filter.json" />
      <span className="display">your</span>
      <InlineIcon icon="/assets/animations/vision.json" />
      <span className="display">agents</span>
      <InlineIcon icon="/assets/animations/idea.json" />
      <span className="display">do</span>
      <InlineIcon icon="/assets/animations/time.json" />
      <span className="display">the</span>
      <InlineIcon icon="/assets/mechanics/agents/battery-plus.svg" />
      <span className="display">busywork</span>
      <InlineIcon icon="/assets/mechanics/agents/battery-minus.svg" />
    </div>
  );
}

