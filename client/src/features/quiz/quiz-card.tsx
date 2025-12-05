import { useState, useEffect } from "react";
import { QuizQuestion } from "./types";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isYes: boolean) => void;
}

export function QuizCard({ question, onAnswer }: QuizCardProps) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);

  const threshold = 80;

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setShowHint(false);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setDragX(clientX - startX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragX) > threshold) {
      const isYes = dragX > 0;
      setExitDirection(isYes ? "right" : "left");
      setIsExiting(true);
      setTimeout(() => onAnswer(isYes), 150);
    } else {
      setDragX(0);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleMouseUp = () => handleEnd();
  const handleMouseLeave = () => { if (isDragging) handleEnd(); };
  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  const rotate = (dragX / 250) * 12;
  const yesProgress = Math.min(1, Math.max(0, dragX / 120));
  const noProgress = Math.min(1, Math.max(0, -dragX / 120));

  const exitTransform = isExiting
    ? exitDirection === "right"
      ? "translateX(120%) rotate(15deg)"
      : "translateX(-120%) rotate(-15deg)"
    : `translateX(${dragX}px) rotate(${rotate}deg)`;

  return (
    <div className="relative flex h-[45vh] min-h-[280px] max-h-[400px] w-full items-center justify-center px-4">
      <div
        className="w-full max-w-sm touch-none select-none"
        style={{
          transform: exitTransform,
          transition: isDragging ? "none" : "transform 0.25s ease-out, opacity 0.25s",
          cursor: isDragging ? "grabbing" : "grab",
          opacity: isExiting ? 0 : 1,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative overflow-hidden border-2 border-black bg-white">
          
          <div
            className="pointer-events-none absolute inset-0 bg-gray-200"
            style={{ opacity: yesProgress * 0.5 }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gray-300"
            style={{ opacity: noProgress * 0.5 }}
          />

          
          <div className="relative z-10 p-6">
            
            <p className="text-center text-base leading-relaxed text-black md:text-lg">
              {question.question}
            </p>
          </div>

          
          <div className="flex items-center justify-between border-t-2 border-black bg-white px-4 py-3">
            <div 
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: noProgress > 0.3 ? "#000" : "#666" }}
            >
              <span className="flex h-6 w-6 items-center justify-center border-2 border-current text-xs">✗</span>
              <span>Non</span>
            </div>
            
            <div className="text-xs text-gray-500">
              {showHint && !isDragging ? "← glisser →" : ""}
            </div>
            
            <div 
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: yesProgress > 0.3 ? "#000" : "#666" }}
            >
              <span>Oui</span>
              <span className="flex h-6 w-6 items-center justify-center border-2 border-current text-xs">✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
