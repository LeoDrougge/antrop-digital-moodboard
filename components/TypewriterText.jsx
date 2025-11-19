import { useEffect, useRef, useState } from 'react';

const texts = [
  '> let the agent do the busywork',
  '> Automate your repetitive marketing tasks',
  '> Campaign ops without the chaos',
  '> Your always-on marketing assistant',
  '> Scale content, not workload',
  '> Run smarter workflows with AI agents',
];

export function TypewriterText({ className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const currentIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const type = () => {
      const currentText = texts[currentIndexRef.current];
      
      if (!isDeletingRef.current) {
        // Typing
        if (charIndexRef.current < currentText.length) {
          setDisplayText(currentText.substring(0, charIndexRef.current + 1));
          charIndexRef.current += 1;
          timeoutRef.current = setTimeout(type, 100);
        } else {
          // Finished typing, wait then start deleting
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            type();
          }, 2000);
        }
      } else {
        // Deleting
        if (charIndexRef.current > 0) {
          setDisplayText(currentText.substring(0, charIndexRef.current - 1));
          charIndexRef.current -= 1;
          timeoutRef.current = setTimeout(type, 50);
        } else {
          // Finished deleting, move to next text immediately
          isDeletingRef.current = false;
          currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
          const nextText = texts[currentIndexRef.current];
          charIndexRef.current = 0;
          // Start typing next text immediately with first character
          setDisplayText(nextText[0] || '');
          charIndexRef.current = 1;
          timeoutRef.current = setTimeout(type, 100);
        }
      }
    };

    // Initialize with first character of first text
    setDisplayText(texts[0][0] || '');
    charIndexRef.current = 1;
    timeoutRef.current = setTimeout(type, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={className}>
      {displayText}
      <span className="typewriter-caret">|</span>
    </div>
  );
}

