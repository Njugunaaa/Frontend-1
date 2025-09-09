import React, { useState, useEffect } from "react";
import { Church } from "lucide-react";

// Smooth easing
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const CurvedLoader = ({ done, duration = 5000 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Fade out near the end
  const getFadeOpacity = () => {
    if (progress < 0.9) return 1;
    const fadeProgress = (progress - 0.9) / 0.1;
    return 1 - fadeProgress;
  };
  const opacity = getFadeOpacity();

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(rawProgress);

      setProgress(easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration]);

  // When both animation is done & app is ready → fade out and unmount
  useEffect(() => {
    if (done && progress === 1) {
      const timer = setTimeout(() => setIsVisible(false), 500); // small fade buffer
      return () => clearTimeout(timer);
    }
  }, [done, progress]);

  const getLoaderHeight = () => {
    if (progress < 0.2) return 100;
    if (progress < 0.8) {
      const curveProgress = (progress - 0.2) / 0.6;
      return 100 - curveProgress * 40;
    } else {
      const shrinkProgress = (progress - 0.8) / 0.2;
      return 60 - shrinkProgress * 60;
    }
  };

  const getCurveIntensity = () => {
    if (progress < 0.2) return 0;
    if (progress < 0.8) {
      const curveProgress = (progress - 0.2) / 0.6;
      return Math.sin(curveProgress * Math.PI) * 25;
    } else {
      const shrinkProgress = (progress - 0.8) / 0.2;
      return Math.sin((1 - shrinkProgress) * Math.PI) * 25;
    }
  };

  const height = getLoaderHeight();
  const curveIntensity = getCurveIntensity();

  const createSVGPath = () => {
    const curveDepth = curveIntensity;
    return `M 0,${curveDepth} Q 50,${-curveDepth} 100,${curveDepth} L 100,100 L 0,100 Z`;
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-100 overflow-hidden transition-opacity duration-700"
      style={{ height: `${height}vh`, opacity }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d={createSVGPath()} fill="#C1121F" />
      </svg>

      {/* Circular spinner with cross in center */}
      <div
        className="relative z-10 flex items-center justify-center h-full"
        style={{ opacity }}
      >
        <div className="relative flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center gap-4">
            <div className="w-[5rem] h-[5rem] border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <Church className="absolute text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CombinedCurvedLoader = ({ done }) => {
  return <CurvedLoader done={done} />;
};

export default CombinedCurvedLoader;
