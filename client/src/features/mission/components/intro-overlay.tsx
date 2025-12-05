import { useState, useEffect, useCallback } from 'react';
import { TuxImage } from './tux-image';
import { ClippySprite } from './svg/clippy-sprite';

interface IntroOverlayProps {
  onStart: () => void;
}

interface CinematicScene {
  id: string;
  speaker: 'narrator' | 'tux' | 'clippy' | 'system';
  text: string;
  background: 'dark' | 'danger' | 'hope' | 'terminal';
  shake?: boolean;
}

const CINEMATIC_SCENES: CinematicScene[] = [
  {
    id: 'boot',
    speaker: 'system',
    text: 'Bienvenue...',
    background: 'terminal',
  },
  {
    id: 'alert_1',
    speaker: 'system',
    text: '⚠ ALERTE CRITIQUE ⚠\nWindows 10 n\'est plus supporté\n50 ordinateurs déclarés obsolètes dans l\'etablissement',
    background: 'danger',
    shake: true,
  },
  {
    id: 'clippy_1',
    speaker: 'clippy',
    text: "Bonjour ! Il semble que vous essayiez d'utiliser du matériel de plus de 3 ans...\n\nPuis-je vous suggérer de tout jeter et racheter du neuf ?",
    background: 'danger',
  },
  {
    id: 'clippy_2',
    speaker: 'clippy',
    text: "Coût estimé : 40 000€ de nouveau matériel\n+ 10 000€ de licences\n\nN'est-ce pas MERVEILLEUX pour notre chiffre d'affaires ?",
    background: 'danger',
    shake: true,
  },
  {
    id: 'interrupt',
    speaker: 'system',
    text: '[ SIGNAL ALTERNATIF DÉTECTÉ ]\n[ PROTOCOLE: OPEN SOURCE ]\n[ CONNEXION EN COURS... ]',
    background: 'terminal',
  },
  {
    id: 'tux_1',
    speaker: 'tux',
    text: "STOP ! Ne l'écoutez pas !\n\nJe suis Tux, ambassadeur du logiciel libre. Ces machines ne sont pas obsolètes — c'est le système qu'on vous impose qui l'est.",
    background: 'hope',
  },
  {
    id: 'tux_2',
    speaker: 'tux',
    text: "Avec GNU/Linux, ces ordinateurs peuvent fonctionner encore 10 ans. Zéro licence à payer. Zéro déchet électronique.\n\nC'est ça, la vraie durabilité.",
    background: 'hope',
  },
  {
    id: 'tux_3',
    speaker: 'tux',
    text: "Le Village N.I.R.D a besoin de toi. Aide ses habitants à se libérer de l'emprise du Big Tech.\n\nChaque PC sauvé est une victoire pour la planète. 🌍",
    background: 'hope',
  },
];

export function IntroOverlay({ onStart }: IntroOverlayProps) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const scene = CINEMATIC_SCENES[sceneIndex];
  const isLastScene = sceneIndex === CINEMATIC_SCENES.length - 1;

  // Typewriter
  useEffect(() => {
    if (showFinalScreen || !scene) return;
    
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < scene.text.length) {
        setDisplayedText(scene.text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [sceneIndex, scene, showFinalScreen]);

  const nextScene = useCallback(() => {
    if (isTyping) {
      setDisplayedText(scene.text);
      setIsTyping(false);
      return;
    }

    if (isLastScene) {
      setIsTransitioning(true);
      setTimeout(() => setShowFinalScreen(true), 500);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setSceneIndex((i) => i + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [isTyping, isLastScene, scene]);

  const skipAll = () => {
    onStart();
  };

  // Final screen
  if (showFinalScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50">
        <div className="relative z-10 flex flex-col items-center px-4">
          
          <div className="mb-8 flex items-center gap-6">
            <div className="relative">
              <TuxImage size={100} />
            </div>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-black md:text-5xl">
                Village N.I.R.D
              </h1>
              <p className="mt-1 text-lg font-bold text-neutral-700">
                La Résistance Commence Ici
              </p>
            </div>
          </div>

          
          <div className="mb-10 grid max-w-2xl grid-cols-3 gap-4">
            <div className="border-3 border-black bg-lime-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-2 text-3xl">♻️</div>
              <h3 className="font-black uppercase text-black">Durable</h3>
              <p className="mt-1 text-xs font-medium text-neutral-700">Prolonger la vie du matériel</p>
            </div>
            <div className="border-3 border-black bg-cyan-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-2 text-3xl">🔓</div>
              <h3 className="font-black uppercase text-black">Libre</h3>
              <p className="mt-1 text-xs font-medium text-neutral-700">Logiciels open source</p>
            </div>
            <div className="border-3 border-black bg-yellow-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-2 text-3xl">🎓</div>
              <h3 className="font-black uppercase text-black">Inclusif</h3>
              <p className="mt-1 text-xs font-medium text-neutral-700">Accessible à tous</p>
            </div>
          </div>

          
          <button
            onClick={onStart}
            className="group relative border-3 border-black bg-lime-400 px-12 py-4 font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Commencer l'Aventure
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          
          <p className="mt-8 font-bold text-neutral-600">
            Nuit de l'Info 2025 • Démarche NIRD
          </p>
        </div>
      </div>
    );
  }

  // Speaker config
  const getSpeakerConfig = () => {
    switch (scene.speaker) {
      case 'tux':
        return {
          name: 'TUX',
          bgColor: 'bg-lime-300',
          portrait: <TuxImage size={80}/>,
        };
      case 'clippy':
        return {
          name: 'TROMBONY',
          bgColor: 'bg-red-300',
          portrait: <ClippySprite size={80} />,
        };
      case 'system':
        return {
          name: 'SYSTÈME',
          bgColor: 'bg-cyan-300',
          portrait: (
            <div className="flex h-20 w-20 items-center justify-center border-3 border-black bg-white font-mono text-2xl font-black text-black">
              {'>_'}
            </div>
          ),
        };
      default:
        return {
          name: '',
          bgColor: 'bg-gray-200',
          portrait: null,
        };
    }
  };

  const config = getSpeakerConfig();

  return (
    <div 
      className="fixed inset-0 z-50 bg-amber-50 transition-all duration-500"
      onClick={nextScene}
    >
      
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b-4 border-black bg-white p-4">
        <div className="flex items-center gap-2">
          {CINEMATIC_SCENES.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 border-2 border-black transition-all duration-300 ${
                i <= sceneIndex ? 'bg-lime-400' : 'bg-white'
              }`}
            />
          ))}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            skipAll();
          }}
          className="border-3 border-black bg-yellow-300 px-4 py-2 z-10 cursor-pointer font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          Passer
        </button>
      </div>

      
      <div 
        className={`flex h-full flex-col items-center justify-center px-4 transition-all duration-300 ${
          isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        } ${scene.shake ? 'animate-shake' : ''}`}
      >
        
        <div className="mb-6">
          <div className={`relative border-3 border-black ${config.bgColor} p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
            {config.portrait}
          </div>
        </div>

        
        <div className={`mb-4 border-3 border-black ${config.bgColor} px-4 py-2 font-mono text-sm font-black uppercase tracking-widest text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
          {config.name}
        </div>

        
        <div className="w-full max-w-2xl border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
          <p className="whitespace-pre-line text-center text-lg font-medium leading-relaxed text-black md:text-xl">
            {displayedText}
            {isTyping && (
              <span className="ml-1 inline-block h-5 w-1 animate-pulse bg-black" />
            )}
          </p>
        </div>

        
        <div className={`mt-6 font-bold text-neutral-600 transition-opacity duration-300 ${isTyping ? 'opacity-0' : 'opacity-100'}`}>
          Cliquez pour continuer →
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
