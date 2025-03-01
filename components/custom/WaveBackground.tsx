import React, { useEffect, useRef } from 'react';

interface Wave {
  color: string;
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
}

interface WaveBackgroundProps {
  children?: React.ReactNode;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);
  const points = 100;

  const waves: Wave[] = [
    {
      color: 'rgba(59, 130, 246, 0.45)', // Changed to blue with more opacity
      amplitude: 50,
      frequency: 0.005,
      speed: 0.01,
      phase: 0,
    },
    {
      color: 'rgba(96, 165, 250, 0.35)',
      amplitude: 30,
      frequency: 0.01,
      speed: 0.008,
      phase: 2,
    },
    {
      color: 'rgba(147, 197, 253, 0.2)',
      amplitude: 20,
      frequency: 0.02,
      speed: 0.005,
      phase: 4,
    },
  ];

  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    waves.forEach((wave) => {
      wave.phase += wave.speed;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i <= points; i++) {
        const x = (canvas.width / points) * i;
        const y =
          canvas.height / 2 +
          Math.sin(i * wave.frequency + wave.phase) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = wave.color;
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const x = (canvas.width / points) * i;
        const y =
          canvas.height / 2 +
          Math.sin(i * wave.frequency + wave.phase) * wave.amplitude;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
      //   ctx.lineWidth = 2;
      ctx.stroke();
    });

    animationFrameId.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '32px',
          color: 'white',
        }}
      >
        {children}
      </div>
    </div>
  );
};
