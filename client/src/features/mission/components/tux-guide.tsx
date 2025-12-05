import { useState, useEffect } from 'react';

interface TuxGuideProps {
  message?: string;
  isVisible?: boolean;
  position?: 'bottom-left' | 'bottom-right';
  onClose?: () => void;
}

const TUX_TIPS = [
  "Clique sur les personnages en rouge pour les aider ! 🐧",
  "Le logiciel libre, c'est la liberté numérique !",
  "Chaque PC sauvé = moins de déchets électroniques 🌍",
  "Astuce : Je propose toujours la bonne solution !",
  "Linux peut faire revivre un vieux PC !",
  "Le code ouvert, c'est la connaissance partagée 📚",
  "Explore la carte pour trouver tous les villageois !",
];

export function TuxGuide({ 
  message, 
  isVisible = true, 
  position = 'bottom-left',
  onClose 
}: TuxGuideProps) {
  const [currentTip, setCurrentTip] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const textToShow = message || TUX_TIPS[currentTip];

  // Typewriter effect
  useEffect(() => {
    if (!isExpanded) return;
    
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < textToShow.length) {
        setDisplayedText(textToShow.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [textToShow, isExpanded]);

  // Rotate tips if no custom message
  useEffect(() => {
    if (message) return;
    
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % TUX_TIPS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [message]);

  if (!isVisible) return null;

  const positionClasses = position === 'bottom-left' 
    ? 'left-4 bottom-24' 
    : 'right-4 bottom-24';

  return (
    <div className={`absolute ${positionClasses} z-40 flex items-end gap-3`}>
      
      {isExpanded && (
        <div className="relative max-w-xs">
          <div className="relative border-3 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center border-2 border-black bg-lime-300">
                <span className="text-xs font-black">🐧</span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-black">
                Guide Tux
              </span>
            </div>
            
            
            <p className="text-sm font-medium leading-relaxed text-black">
              {displayedText}
              {isTyping && (
                <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-black" />
              )}
            </p>
            
            
            {!message && (
              <div className="mt-3 flex justify-center gap-1.5">
                {TUX_TIPS.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 transition-all duration-300 ${
                      index === currentTip 
                        ? 'w-4 border-2 border-black bg-yellow-300' 
                        : 'w-2 border-2 border-black bg-white'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          
          <div className="absolute -right-2 bottom-6 h-4 w-4 rotate-45 border-r-3 border-t-3 border-black bg-white" />
        </div>
      )}

      
      <div 
        className="group relative cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        
        <div className="relative h-20 w-20 border-3 border-black bg-white p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          <img 
            src="/tux/tux.png" 
            alt="Tux le pingouin" 
            className="h-full w-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        
        
        {isExpanded && onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center border-3 border-black bg-red-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
              <path d="M3.05 3.05a.5.5 0 0 1 .708 0L6 5.293l2.242-2.243a.5.5 0 0 1 .708.708L6.707 6l2.243 2.242a.5.5 0 0 1-.708.708L6 6.707 3.758 8.95a.5.5 0 0 1-.708-.708L5.293 6 3.05 3.758a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
