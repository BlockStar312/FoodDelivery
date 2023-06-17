import React ,{useEffect,useState} from 'react';
import { constants } from '../constants';
import "../styles/Animations/BrandAnimation.css"


function BrandAnimation() {
  const TEXTS = constants.heroSection.headlineText;
  const COLORS = constants.heroSection.headlineColors;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [TEXTS.length]);

  return (
    <div className="text-animation-container">
      {TEXTS.map((word, index) => (
        <span
          key={index}
          className={`animated-text ${index === currentIndex ? 'visible' : ''}`}
          style={{ color: COLORS[index % COLORS.length] }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default BrandAnimation;