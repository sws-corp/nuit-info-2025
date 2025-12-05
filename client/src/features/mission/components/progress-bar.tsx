import { TuxImage } from './tux-image';

interface ProgressBarProps {
  progress: number;
  score: number;
  maxScore: number;
}

export function ProgressBar({ progress, score, maxScore }: ProgressBarProps) {
  return (
    <div className="absolute left-4 top-4 z-40">
      
      <div className="border-2 border-black bg-white p-4">
        
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-black">
            <TuxImage size={28} />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Souveraineté
            </h3>
            <p className="text-sm font-bold text-black">
              Village N.I.R.D
            </p>
          </div>
        </div>

        
        <div className="mb-3 flex items-end justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-black">{score}</span>
            <span className="text-lg font-medium text-gray-400">/{maxScore}</span>
          </div>
          <span className="border border-black px-3 py-1 text-xs font-bold text-black">
            {Math.round(progress)}%
          </span>
        </div>
        
        
        <div className="mb-4">
          <div className="h-3 border border-black bg-white">
            <div
              className="h-full bg-black transition-all duration-700 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          
          <div className="mt-1 flex justify-between px-1">
            {[0, 25, 50, 75, 100].map((mark) => (
              <div
                key={mark}
                className={`h-1 w-1 transition-colors duration-300 ${
                  progress >= mark ? 'bg-black' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        
        {progress >= 100 && (
          <div className="relative mt-3 overflow-hidden border border-black bg-white p-3">
            <p className="relative text-center font-bold text-black">
              🎉 Village Libéré ! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

