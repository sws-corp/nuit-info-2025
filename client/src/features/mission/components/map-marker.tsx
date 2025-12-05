import type { MapMarker } from '../types';
import { NPCImage } from './npc-image';

interface MapMarkerComponentProps {
  marker: MapMarker;
  onClick: (id: string) => void;
  isResolved: boolean;
}

export function MapMarkerComponent({ marker, onClick, isResolved }: MapMarkerComponentProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isResolved) {
      onClick(marker.id);
    }
  };

  return (
    <div
      className={`absolute border-3 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
        isResolved 
          ? 'opacity-50' 
          : 'cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
      }`}
      style={{
        left: marker.x - 24,
        top: marker.y - 24,
        zIndex: 10,
      }}
      onClick={handleClick}
    >
      
      {marker.npcType && (
        <NPCImage type={marker.npcType} isResolved={isResolved} size={48} />
      )}
      
      
      <div
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap border-3 border-black bg-yellow-300 px-3 py-1 text-center font-mono text-xs font-black uppercase text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      >
        {marker.label}
      </div>
    </div>
  );
}
