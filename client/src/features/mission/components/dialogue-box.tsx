import { useState, useEffect, useCallback } from 'react';
import type { Dialogue, DialogueChoice } from '../types';
import { TuxImage } from './tux-image';
import { ClippySprite } from './svg/clippy-sprite';
import { NPCImage } from './npc-image';

interface DialogueBoxProps {
  dialogue: Dialogue;
  onAdvance: () => void;
  onSelectChoice: (choice: DialogueChoice) => void;
  onClose: () => void;
}

export function DialogueBox({ dialogue, onAdvance, onSelectChoice, onClose }: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showChoices, setShowChoices] = useState(false);

  
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    setShowChoices(false);
    
    let index = 0;
    const text = dialogue.text;
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        
        
        if (dialogue.choices && dialogue.choices.length > 0) {
          setTimeout(() => setShowChoices(true), 300);
        }
      }
    }, 25);

    return () => clearInterval(interval);
  }, [dialogue]);

  const handleClick = useCallback(() => {
    if (isTyping) {
      
      setDisplayedText(dialogue.text);
      setIsTyping(false);
      if (dialogue.choices && dialogue.choices.length > 0) {
        setTimeout(() => setShowChoices(true), 300);
      }
    } else if (!dialogue.choices || dialogue.choices.length === 0) {
      
      onAdvance();
    }
  }, [isTyping, dialogue, onAdvance]);

  const getPortrait = () => {
    switch (dialogue.speaker) {
      case 'tux':
        return <TuxImage size={80}/>;
      case 'clippy':
        return <ClippySprite size={80} />;
      case 'npc': {
        const npcType = dialogue.portrait as 'teacher' | 'student' | 'admin' | 'director' | 'sysadmin';
        return <NPCImage type={npcType} size={80} />;
      }
      default:
        return <TuxImage size={80} />;
    }
  };

  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex justify-center p-4 md:p-6">
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div
        className="relative flex w-full max-w-4xl cursor-pointer flex-col border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:flex-row"
        onClick={handleClick}
      >
        
        <div className="relative flex h-28 w-full shrink-0 items-center justify-center border-b-2 border-black bg-neutral-100 md:h-auto md:w-36 md:border-b-0 md:border-r-2">
          <div className="relative z-10">
            {getPortrait()}
          </div>
        </div>

        
        <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
          
          <div>
            <div className="mb-3 flex items-center gap-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-black">
                {dialogue.speakerName}
              </h3>
              {dialogue.speaker === 'tux' && (
                <span className="border border-black px-2 py-0.5 text-xs font-medium text-black">
                  GUIDE
                </span>
              )}
              {dialogue.speaker === 'clippy' && (
                <span className="border border-black px-2 py-0.5 text-xs font-medium text-black">
                  ADVERSAIRE
                </span>
              )}
            </div>
            
            
            <p className="min-h-16 text-base leading-relaxed text-neutral-700 md:text-lg">
              <span>{displayedText}</span>
              {isTyping && (
                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-black" />
              )}
            </p>
          </div>

          
          <div className="mt-4 flex flex-wrap gap-3">
            {showChoices && dialogue.choices && dialogue.choices.map((choice, index) => (
              <button
                key={choice.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectChoice(choice);
                }}
                className='border-2 border-black px-4 py-2.5 font-medium transition-all duration-150 hover:bg-black hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {choice.text}
              </button>
            ))}
            
            
            {!showChoices && !isTyping && (!dialogue.choices || dialogue.choices.length === 0) && (
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="animate-bounce">↓</span>
                <span className="animate-pulse">Cliquez pour continuer...</span>
              </div>
            )}
          </div>
        </div>

        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-0 top-0 border-b-2 border-l-2 border-black bg-white p-2 text-black transition-all duration-150 hover:bg-black hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
