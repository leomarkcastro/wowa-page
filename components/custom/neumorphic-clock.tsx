'use client';

import React, { useEffect } from 'react';

const styles = {
  clockContainer: {
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: '#e0e5ec',
    boxShadow: '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockFace: {
    position: 'relative',
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    background: '#e0e5ec',
    boxShadow: 'inset 10px 10px 20px #a3b1c6, inset -10px -10px 20px #ffffff',
  },
  centerDot: {
    width: 13,
    height: 13,
    background: '#333',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '49%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
} as const;

const getHandStyle = (
  type: 'hour' | 'minute' | 'second',
  rotation: number,
  isLoading: boolean,
): React.CSSProperties => ({
  position: 'absolute',
  background: type === 'second' ? '#ff6f61' : '#333',
  transformOrigin: '50% 100%',
  transition: isLoading
    ? 'none'
    : 'transform 0.5s cubic-bezier(0.4, 2.3, 0.6, 1)',
  borderRadius: 5,
  width: type === 'hour' ? 6 : type === 'minute' ? 4 : 2,
  height: type === 'hour' ? 60 : type === 'minute' ? 90 : 100,
  top: type === 'hour' ? '28%' : type === 'minute' ? '17%' : '13%',
  left: '50%',
  transform: `translateX(-50%) rotate(${rotation}deg)`,
});

const getNumberStyle = (position: string) => {
  const baseStyle = {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textShadow: '2px 2px 4px #a3b1c6, -2px -2px 4px #ffffff',
  } as const;

  switch (position) {
    case '12':
      return {
        ...baseStyle,
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case '3':
      return {
        ...baseStyle,
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
      };
    case '6':
      return {
        ...baseStyle,
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case '9':
      return {
        ...baseStyle,
        top: '50%',
        left: 10,
        transform: 'translateY(-50%)',
      };
    default:
      return baseStyle;
  }
};

const NeumorphicClock: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [time, setTime] = React.useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const second = now.getSeconds();

      setTime({
        hour: hour * 30 + minute * 0.5,
        minute: minute * 6 + second * 0.1,
        second: second * 6,
      });
      if (loading) {
        setLoading(false);
      }
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // Initial call

    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return null;
  }

  return (
    <div style={styles.clockContainer}>
      <div style={styles.clockFace}>
        <div style={getNumberStyle('12')}>12</div>
        <div style={getNumberStyle('3')}>3</div>
        <div style={getNumberStyle('6')}>6</div>
        <div style={getNumberStyle('9')}>9</div>

        <div style={getHandStyle('hour', time.hour, false)} />
        <div style={getHandStyle('minute', time.minute, false)} />
        <div style={getHandStyle('second', time.second, false)} />

        <div style={styles.centerDot} />
      </div>
    </div>
  );
};

export default NeumorphicClock;
