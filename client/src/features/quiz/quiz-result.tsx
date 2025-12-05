import { RotateCcw, ArrowRight } from "lucide-react";
import { QuizResult } from "./types";

interface QuizResultProps {
  result: QuizResult;
  onRestart: () => void;
  onClose: () => void;
}

export function QuizResultView({ result, onRestart, onClose }: QuizResultProps) {
  const independenceScore = Math.round(((result.total - result.score) / result.total) * 100);

  return (
    <div className="flex flex-col gap-5 p-5 bg-white text-black">
      
      <div className="text-center">
        <div className="mb-1 text-sm text-gray-600">Votre score d'indépendance</div>
        <div className="text-5xl font-bold text-black">
          {independenceScore}%
        </div>
        <div className="mt-3 text-lg text-black">{result.title}</div>
        <p className="mt-2 text-sm text-gray-600">{result.message}</p>
      </div>

      
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-gray-500">
          <span>Dépendant</span>
          <span>Libre</span>
        </div>
        <div className="h-2 w-full bg-gray-300">
          <div
            className="h-full bg-black transition-all duration-700 ease-out"
            style={{ width: `${independenceScore}%` }}
          />
        </div>
      </div>

      
      {result.improvements.length > 0 && (
        <div className="border border-black bg-white">
          <div className="border-b border-black px-4 py-3">
            <h4 className="text-sm font-medium text-black">
              {result.improvements.length} piste{result.improvements.length > 1 ? "s" : ""} d'amélioration
            </h4>
          </div>
          <div className="max-h-48 overflow-y-auto">
            <ul className="divide-y divide-gray-300">
              {result.improvements.map((advice, i) => (
                <li key={i} className="flex items-start gap-3 px-4 py-3">
                  <ArrowRight size={12} className="mt-1 shrink-0 text-black" />
                  <span className="text-sm text-gray-700">{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      
      <div className="flex gap-3 pt-2">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 border border-black px-4 py-2.5 text-sm text-black transition-colors hover:bg-gray-100"
        >
          <RotateCcw size={14} />
          Refaire
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
