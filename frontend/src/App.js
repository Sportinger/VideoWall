import React, { useState, useEffect } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';

function App() {
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate rowHeight based on viewport height
  const calculateRowHeight = () => {
    const totalRows = 6; // 2 rows of 3 boxes + 1 row for the bottom box
    const margins = (totalRows + 1) * 10; // Account for margins between rows
    return Math.floor((dimensions.height - margins) / totalRows);
  };

  // Define the layout for different breakpoints
  const layouts = {
    lg: [
      { i: 'box1', x: 0, y: 0, w: 4, h: 2 },
      { i: 'box2', x: 4, y: 0, w: 4, h: 2 },
      { i: 'box3', x: 8, y: 0, w: 4, h: 2 },
      { i: 'box4', x: 0, y: 2, w: 4, h: 2 },
      { i: 'box5', x: 4, y: 2, w: 4, h: 2 },
      { i: 'box6', x: 8, y: 2, w: 4, h: 2 },
      { i: 'box7', x: 0, y: 4, w: 12, h: 2 },
    ]
  };

  return (
    <div className="App">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={calculateRowHeight()}
        width={dimensions.width}
        containerPadding={[5, 5]}
        margin={[10, 10]}
        isDraggable={true}
        isResizable={true}
        autoSize={true}
        verticalCompact={true}
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={(layout, layouts) => {
          console.log('layout changed', layouts);
        }}
      >
        {layouts.lg.map((item) => (
          <div key={item.i} className="grid-box">
            Box {item.i.replace('box', '')}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App; 