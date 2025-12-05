interface ClippySpriteProps {
  size?: number;
}

export function ClippySprite({ size = 80 }: ClippySpriteProps) {
  return (
    <img
      src="/mission/paperclip/default.png"
      alt="Clippy"
      className="h-full w-full object-contain pixelated"
      draggable={false}
      style={{ width: size, height: size }}
    />
  );
}
