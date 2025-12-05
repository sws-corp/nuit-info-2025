import { useState } from 'react';

interface HiddenSnakeProps {
  x: number;
  y: number;
}

export function HiddenSnake({ x, y }: HiddenSnakeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = '/snake';
  };

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ cursor: 'pointer', pointerEvents: 'all' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      
      <rect
        x="-40"
        y="-30"
        width="80"
        height="60"
        rx="4"
        fill="#22c55e"
        stroke="#000"
        strokeWidth="3"
      />
      <rect
        x="-35"
        y="-25"
        width="70"
        height="50"
        rx="2"
        fill="#16a34a"
        stroke="#000"
        strokeWidth="2"
      />
      
      
      <ellipse cx="-20" cy="-15" rx="12" ry="8" fill="#4ade80" stroke="#000" strokeWidth="2" />
      <ellipse cx="20" cy="-10" rx="10" ry="7" fill="#4ade80" stroke="#000" strokeWidth="2" />
      <ellipse cx="0" cy="10" rx="15" ry="8" fill="#4ade80" stroke="#000" strokeWidth="2" />
      
      
      <g 
        style={{ 
          opacity: isHovered ? 1 : 0.5,
          transform: isHovered ? 'translate(5px, -5px)' : 'translate(0, 0)',
          transition: 'all 0.3s ease',
        }}
      >
        
        <image
          href="/snake/skins/classic/head.png"
          x="5"
          y="-20"
          width="30"
          height="30"
          style={{
            filter: 'drop-shadow(2px 2px 0px #000)',
          }}
        />
      </g>
      
      
      {isHovered && (
        <g>
          <rect
            x="-45"
            y="-65"
            width="90"
            height="28"
            rx="0"
            fill="#facc15"
            stroke="#000"
            strokeWidth="3"
          />
          <rect
            x="-42"
            y="-62"
            width="84"
            height="22"
            fill="#fef08a"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-46"
            textAnchor="middle"
            fill="#000"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Sssecret!
          </text>
        </g>
      )}
    </g>
  );
}
