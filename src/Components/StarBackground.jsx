import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 15;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      <style>
        {`
          .star {
            position: absolute;
            background: radial-gradient(circle, #ffffff 0%, #ffffff 50%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 6px #ffffff;
          }
          
          .animate-pulse-subtle {
            animation: pulse-subtle var(--animation-duration) ease-in-out infinite alternate;
          }
          
          @keyframes pulse-subtle {
            0% {
              opacity: var(--start-opacity);
              transform: scale(1);
            }
            100% {
              opacity: calc(var(--start-opacity) * 0.3);
              transform: scale(0.8);
            }
          }
          
          .meteor {
            position: absolute;
            background: linear-gradient(45deg, #ffffff 0%, #87ceeb 50%, transparent 100%);
            border-radius: 50% 0 50% 0;
            box-shadow: 0 0 10px #87ceeb, 0 0 20px #87ceeb, 0 0 30px #87ceeb;
            transform: rotate(45deg);
          }
          
          .animate-meteor {
            animation: meteor var(--animation-duration) linear infinite;
          }
          
          @keyframes meteor {
            0% {
              transform: translateX(-100px) translateY(-100px) rotate(45deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) rotate(45deg);
              opacity: 0;
            }
          }
        `}
      </style>
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            "--start-opacity": star.opacity,
            "--animation-duration": star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 2 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            "--animation-duration": meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;