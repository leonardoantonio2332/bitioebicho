'use client';

import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: 16 + Math.random() * 24,
        duration: 4 + Math.random() * 4,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 9999,
        }}
      >
        {hearts.map(({ id, left, delay, size, duration }) => (
          <span
            key={id}
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: `${left}%`,
              fontSize: `${size}px`,
              color: '#ff69b4',
              opacity: 0.8,
              animation: `floatUp ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              userSelect: 'none',
            }}
          >
            💖
          </span>
        ))}
      </div>
    </>
  );
}
