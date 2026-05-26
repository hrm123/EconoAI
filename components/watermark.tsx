import React from 'react';

export default function Watermark() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none', // Allows clicking through the watermark
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          color: 'rgba(255, 0, 0, 0.2)', // Semi-transparent red
          transform: 'rotate(-30deg)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        COMING SOON
      </div>
    </div>
  );
}