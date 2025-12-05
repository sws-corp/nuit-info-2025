interface TuxImageProps {
  size?: number;
  className?: string;
}

export function TuxImage({ size = 80, className = ''}: TuxImageProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/tux/tux.png" 
        alt="Tux le pingouin" 
        draggable={false}
        className="h-full w-full object-cover pixelated"
      />
    </div>
  );
}
