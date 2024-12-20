import React, { useState, useEffect } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        rowHeight={30}
        width={width}
        containerPadding={[0, 0]}
        margin={[10, 10]}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={(layout, layouts) => {
          // This will update the layout when boxes are resized or moved
          console.log('layout changed', layouts);
        }}
        onBreakpointChange={(breakpoint, cols) => {
          console.log('breakpoint changed', breakpoint, cols);
        }}
        onWidthChange={(width, margin, cols) => {
          console.log('width changed', width, margin, cols);
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