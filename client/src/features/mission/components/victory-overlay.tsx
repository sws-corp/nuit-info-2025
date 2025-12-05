import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TuxImage } from './tux-image';
import { QuizLauncher } from './quiz-launcher';
import { ClipboardList, RotateCcw, Home } from 'lucide-react';

interface VictoryOverlayProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
}

export function VictoryOverlay({ score, maxScore, onRestart }: VictoryOverlayProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();
  const percentage = Math.round((score / maxScore) * 100);

  const handleHome = () => {
    navigate('/');
  };

  if (showQuiz) {
    return (
      <QuizLauncher 
        onClose={() => setShowQuiz(false)} 
        onRestart={onRestart} 
        onHome={handleHome}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-amber-50 py-8">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-4 text-center">
        
        <div className="relative mb-6">
          <TuxImage size={80} />
        </div>

        
        <h1 className="mb-2 text-3xl font-black uppercase text-black sm:text-4xl">
          Village Libéré !
        </h1>

        
        <p className="mb-8 text-lg font-bold text-black">
          Grâce à toi, le Lycée du Village N.I.R.D est désormais libre.
          <br />
          <span className="text-base font-medium text-neutral-700">
            Les ordinateurs ont été sauvés et les élèves ont accès à des outils libres.
          </span>
        </p>

        
        <div className="mb-8 w-full border-3 border-black bg-lime-300 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-black">
            Score de Souveraineté
          </div>
          <div className="mb-4 text-5xl font-black text-black">{percentage}%</div>
          
          
          <div className="mb-4 h-5 border-3 border-black bg-white">
            <div 
              className="h-full bg-black transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="font-bold text-neutral-700">
            {score} / {maxScore} points
          </div>
        </div>

        
        <div className="mb-8 grid w-full grid-cols-3 gap-4">
          <div className="border-3 border-black bg-yellow-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="mb-2 block text-2xl">♻️</span>
            <span className="text-xs font-black uppercase text-black">Durable</span>
          </div>
          <div className="border-3 border-black bg-cyan-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="mb-2 block text-2xl">🔓</span>
            <span className="text-xs font-black uppercase text-black">Libre</span>
          </div>
          <div className="border-3 border-black bg-pink-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="mb-2 block text-2xl">🎓</span>
            <span className="text-xs font-black uppercase text-black">Inclusif</span>
          </div>
        </div>

        
        <div className="flex w-full flex-col gap-4">
          
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full border-3 border-black bg-yellow-300 px-6 py-4 text-lg font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            <span className="flex items-center justify-center gap-3">
              <ClipboardList size={22} />
              Tester mon emprise
            </span>
          </button>

          <div className="flex gap-4">
            
            <button
              onClick={onRestart}
              className="flex flex-1 items-center justify-center gap-2 border-3 border-black bg-white px-4 py-3 font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              <RotateCcw size={18} />
              Rejouer
            </button>

            
            <button
              onClick={handleHome}
              className="flex flex-1 items-center justify-center gap-2 border-3 border-black bg-white px-4 py-3 font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              <Home size={18} />
              Accueil
            </button>
          </div>
        </div>

        
        <p className="mt-8 font-bold uppercase tracking-widest text-neutral-700">
          Nuit de l'Info 2025 • Démarche NIRD
        </p>
      </div>
    </div>
  );
}
