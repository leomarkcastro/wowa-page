import { useEffect, useState, useRef } from 'react';

const CityScape = ({
  maxBuildings = 70,
  minBuildingWidth = 15,
  maxBuildingWidth = 50,
  minBuildingHeight = 50,
  maxBuildingHeight = 300,
  windowDensity = 0.3,
  backgroundColor = '#0a1029',
  buildingColor = '#1a1b26',
  buildingLitColor = '#253156',
  accentColor = '#50c5e6',
}) => {
  const cityscapeRef = useRef(null);
  const [buildings, setBuildings] = useState([]);
  const buildingIdCounterRef = useRef(0);

  // Generate a new building
  const generateBuilding = () => {
    const width =
      minBuildingWidth + Math.random() * (maxBuildingWidth - minBuildingWidth);
    const height =
      minBuildingHeight +
      Math.random() * (maxBuildingHeight - minBuildingHeight);
    const left = Math.random() * (window.innerWidth - width);
    const isLit = Math.random() > 0.6;
    const opacity = 0.6 + Math.random() * 0.4;
    const id = buildingIdCounterRef.current++;

    // Generate windows
    const numWindows = Math.floor(((width * height) / 200) * windowDensity);
    const windows = Array(numWindows)
      // @ts-ignore
      .fill()
      .map(() => ({
        x: 5 + Math.random() * (width - 10),
        y: 10 + Math.random() * (height - 20),
        lit: Math.random() > 0.4,
      }));

    return { id, width, height, left, isLit, opacity, windows, visible: true };
  };

  // Initialize cityscape
  useEffect(() => {
    // Create initial buildings
    // @ts-ignore
    const initialBuildings = Array(maxBuildings).fill().map(generateBuilding);
    setBuildings(initialBuildings);

    // Start animation cycles
    const animationCycleTimer = setTimeout(animationCycle, 2000);
    const fadeBuildingsTimer = setTimeout(fadeBuildings, 2000);

    // Handle window resize
    const handleResize = () => {
      setBuildings((prevBuildings) => {
        const validBuildings = prevBuildings.filter(
          (building) => building.left <= window.innerWidth,
        );

        const newBuildings = [];
        const numToAdd = maxBuildings - validBuildings.length;

        for (let i = 0; i < numToAdd; i++) {
          newBuildings.push(generateBuilding());
        }

        return [...validBuildings, ...newBuildings];
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(animationCycleTimer);
      clearTimeout(fadeBuildingsTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation cycle - add/remove buildings
  const animationCycle = () => {
    setBuildings((prevBuildings) => {
      const updatedBuildings = [...prevBuildings];

      // Occasionally remove a building
      if (Math.random() > 0.7 && updatedBuildings.length > maxBuildings / 2) {
        const randomIndex = Math.floor(Math.random() * updatedBuildings.length);
        updatedBuildings[randomIndex] = {
          ...updatedBuildings[randomIndex],
          visible: false,
          toRemove: true,
        };

        // Schedule actual removal after transition
        setTimeout(() => {
          setBuildings((prev) => prev.filter((b) => !b.toRemove));
        }, 3000);
      }

      // Occasionally add a new building
      if (
        Math.random() > 0.5 &&
        updatedBuildings.filter((b) => !b.toRemove).length < maxBuildings
      ) {
        updatedBuildings.push(generateBuilding());
      }

      return updatedBuildings;
    });

    // Schedule next cycle
    setTimeout(animationCycle, 2000 + Math.random() * 3000);
  };

  // Fade existing buildings without removing them
  const fadeBuildings = () => {
    setBuildings((prevBuildings) => {
      if (prevBuildings.length > 0 && Math.random() > 0.7) {
        const randomIndex = Math.floor(Math.random() * prevBuildings.length);
        const updatedBuildings = [...prevBuildings];

        // Fade building out
        updatedBuildings[randomIndex] = {
          ...updatedBuildings[randomIndex],
          visible: false,
          fading: true,
        };

        // Schedule fade back in
        setTimeout(() => {
          setBuildings((prev) => {
            return prev.map((building) => {
              if (
                building.id === updatedBuildings[randomIndex].id &&
                building.fading
              ) {
                return {
                  ...building,
                  visible: true,
                  fading: false,
                  opacity: 0.6 + Math.random() * 0.4,
                };
              }
              return building;
            });
          });
        }, 3000);

        return updatedBuildings;
      }

      return prevBuildings;
    });

    // Schedule next fade
    setTimeout(fadeBuildings, 1500 + Math.random() * 2000);
  };

  return (
    <div
      ref={cityscapeRef}
      className='cityscape-container'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor,
      }}
    >
      {buildings.map((building) => (
        <div
          key={building.id}
          style={{
            position: 'absolute',
            bottom: 0,
            width: `${building.width}px`,
            height: `${building.height}px`,
            left: `${building.left}px`,
            backgroundColor: building.isLit ? buildingLitColor : buildingColor,
            borderTop: `2px solid ${accentColor}`,
            boxShadow: `0 0 10px rgba(80, 197, 230, 0.4)`,
            transformOrigin: 'bottom',
            opacity: building.visible ? building.opacity : 0,
            transition: 'opacity 3s ease-in-out',
          }}
        >
          {building.windows.map((window, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${window.x}px`,
                top: `${window.y}px`,
                backgroundColor: 'rgba(255, 255, 100, 0.8)',
                width: '4px',
                height: '6px',
                boxShadow: '0 0 5px rgba(255, 255, 100, 0.5)',
                opacity: window.lit ? 0.8 : 0,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CityScape;
