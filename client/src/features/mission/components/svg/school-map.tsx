import type { Building } from '../../types';
import { HiddenSnake } from './hidden-snake';

interface SchoolMapSVGProps {
  buildings: Building[];
  liberatedBuildings: string[];
  onBuildingClick?: (building: Building) => void;
}

export function SchoolMapSVG({ buildings, liberatedBuildings, onBuildingClick }: SchoolMapSVGProps) {
  const getBuildingColor = (building: Building) => {
    const isLiberated = liberatedBuildings.includes(building.id);
    
    const colors: Record<string, { normal: string; liberated: string }> = {
      entrance: { normal: '#fbbf24', liberated: '#86efac' },
      classroom: { normal: '#f87171', liberated: '#86efac' },
      computerLab: { normal: '#60a5fa', liberated: '#86efac' },
      library: { normal: '#c084fc', liberated: '#86efac' },
      office: { normal: '#fb923c', liberated: '#86efac' },
      cafeteria: { normal: '#f472b6', liberated: '#86efac' },
    };
    
    const colorSet = colors[building.type] || colors.classroom;
    return isLiberated ? colorSet.liberated : colorSet.normal;
  };

  return (
    <svg
      width="1200"
      height="800"
      viewBox="0 0 1200 800"
      className="absolute inset-0"
      style={{ pointerEvents: 'auto' }}
    >
      
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" opacity="0.1" />
        </pattern>
      </defs>
      
      
      <rect x="0" y="0" width="1200" height="800" fill="#fef3c7" />
      <rect x="0" y="0" width="1200" height="800" fill="url(#grid)" />
      
      
      <g stroke="#000" strokeWidth="8" fill="none" strokeLinecap="square">
        <path d="M 600 650 L 600 520 L 600 400" />
        <path d="M 600 400 L 300 400" />
        <path d="M 600 400 L 800 400" />
        <path d="M 300 400 L 300 175" />
        <path d="M 300 175 L 500 175" />
        <path d="M 500 175 L 800 175" />
      </g>
      
      
      <g stroke="#fff" strokeWidth="20" fill="none" strokeLinecap="square">
        <path d="M 600 650 L 600 520 L 600 400" />
        <path d="M 600 400 L 300 400" />
        <path d="M 600 400 L 800 400" />
        <path d="M 300 400 L 300 175" />
        <path d="M 300 175 L 500 175" />
        <path d="M 500 175 L 800 175" />
      </g>
      
      
      {[
        { x: 50, y: 50, hasSnake: false },
        { x: 1100, y: 50, hasSnake: false },
        { x: 50, y: 700, hasSnake: true },
        { x: 1100, y: 700, hasSnake: false },
        { x: 550, y: 280, hasSnake: false },
        { x: 950, y: 550, hasSnake: false },
        { x: 50, y: 550, hasSnake: false },
      ].map((tree, i) => (
        tree.hasSnake ? (
          <HiddenSnake key={i} x={tree.x} y={tree.y} />
        ) : (
          <g key={i} transform={`translate(${tree.x}, ${tree.y})`}>
            
            <circle cx="4" cy="4" r="25" fill="#000" />
            
            <circle cx="0" cy="0" r="25" fill="#86efac" stroke="#000" strokeWidth="3" />
            <circle cx="-8" cy="-8" r="15" fill="#4ade80" stroke="#000" strokeWidth="2" />
            <circle cx="8" cy="-4" r="12" fill="#22c55e" stroke="#000" strokeWidth="2" />
          </g>
        )
      ))}
      
      
      {buildings.map((building) => {
        const color = getBuildingColor(building);
        const isLiberated = liberatedBuildings.includes(building.id);
        
        return (
          <g 
            key={building.id} 
            className="cursor-pointer transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            onClick={() => onBuildingClick?.(building)}
            style={{ pointerEvents: 'auto' }}
          >
            
            <rect
              x={building.x + 6}
              y={building.y + 6}
              width={building.width}
              height={building.height}
              fill="#000"
            />
            
            
            <rect
              x={building.x}
              y={building.y}
              width={building.width}
              height={building.height}
              fill={color}
              stroke="#000"
              strokeWidth="3"
            />
            
            
            <rect
              x={building.x}
              y={building.y}
              width={building.width}
              height="16"
              fill={isLiberated ? '#22c55e' : '#000'}
            />
            
            
            {Array.from({ length: Math.floor(building.width / 50) }).map((_, i) => (
              <g key={i}>
                
                <rect
                  x={building.x + 17 + i * 50}
                  y={building.y + 32}
                  width="28"
                  height="24"
                  fill="#000"
                />
                
                <rect
                  x={building.x + 15 + i * 50}
                  y={building.y + 30}
                  width="28"
                  height="24"
                  fill={isLiberated ? '#fef08a' : '#fff'}
                  stroke="#000"
                  strokeWidth="3"
                />
              </g>
            ))}
            
            
            <g>
              
              <rect
                x={building.x + building.width / 2 - 13}
                y={building.y + building.height - 38}
                width="28"
                height="36"
                fill="#000"
              />
              
              <rect
                x={building.x + building.width / 2 - 15}
                y={building.y + building.height - 40}
                width="28"
                height="36"
                fill={isLiberated ? '#86efac' : '#fff'}
                stroke="#000"
                strokeWidth="3"
              />
            </g>
            
            
            <g>
              
              <rect
                x={building.x + building.width / 2 - 60}
                y={building.y + building.height + 8}
                width="120"
                height="24"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x={building.x + building.width / 2}
                y={building.y + building.height + 24}
                textAnchor="middle"
                fill="#000"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
                style={{ textTransform: 'uppercase' }}
              >
                {building.name}
              </text>
            </g>
            
            
            {isLiberated && (
              <g transform={`translate(${building.x + building.width - 20}, ${building.y - 10})`}>
                
                <rect x="-11" y="-11" width="26" height="26" fill="#000" />
                
                <rect x="-13" y="-13" width="26" height="26" fill="#22c55e" stroke="#000" strokeWidth="3" />
                <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">✓</text>
              </g>
            )}
          </g>
        );
      })}
      
      
      <g transform="translate(600, 50)">
        
        <rect x="-196" y="-16" width="400" height="44" fill="#000" />
        
        <rect x="-200" y="-20" width="400" height="44" fill="#a3e635" stroke="#000" strokeWidth="4" />
        <text x="0" y="10" textAnchor="middle" fill="#000" fontSize="20" fontFamily="monospace" fontWeight="bold" style={{ textTransform: 'uppercase' }}>
          🏫 LYCÉE DU VILLAGE N.I.R.D 🏫
        </text>
      </g>
    </svg>
  );
}
