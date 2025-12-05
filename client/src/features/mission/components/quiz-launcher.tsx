import { useState, useCallback } from 'react';
import { ClipboardList, Zap, Clock, ArrowRight, X } from 'lucide-react';
import { TuxImage } from './tux-image';
import { FinalScreen } from './final-screen';
import { QuizCard, QuizProgress, QuizResultView, type QuizResult, type AnswerHistory } from '../../quiz';
import { QUIZ_QUESTIONS } from '../../quiz/data/question';

type QuizMode = 'fast' | 'complete' | null;
type ScreenState = 'select' | 'quiz' | 'result' | 'final';

interface QuizLauncherProps {
  onClose: () => void;
  onRestart: () => void;
  onHome: () => void;
}

// Sélection de 10 questions représentatives pour le mode rapide
const FAST_QUIZ_INDICES = [0, 2, 5, 7, 10, 14, 17, 20, 27, 32];
const FAST_QUIZ_QUESTIONS = FAST_QUIZ_INDICES.map(i => QUIZ_QUESTIONS[i]);

export function QuizLauncher({ onClose, onRestart, onHome }: QuizLauncherProps) {
  const [mode, setMode] = useState<QuizMode>(null);
  const [screen, setScreen] = useState<ScreenState>('select');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gafamScore, setGafamScore] = useState(0);
  const [history, setHistory] = useState<AnswerHistory[]>([]);

  const questions = mode === 'fast' ? FAST_QUIZ_QUESTIONS : QUIZ_QUESTIONS;

  const handleAnswer = useCallback(
    (isYes: boolean) => {
      if (isYes) {
        setGafamScore((s) => s + 1);
      }

      setHistory((prev) => [
        ...prev,
        {
          question: questions[currentIndex].question,
          wasYes: isYes,
          advice: questions[currentIndex].advice,
        },
      ]);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setScreen('result');
      }
    },
    [currentIndex, questions]
  );

  const getResult = (): QuizResult => {
    const total = questions.length;
    const independencePercent = Math.round(((total - gafamScore) / total) * 100);

    const improvements = history
      .filter((h) => h.wasYes)
      .map((h) => h.advice);

    if (independencePercent >= 70) {
      return {
        score: gafamScore,
        total,
        level: 'free',
        title: 'Résistant numérique 🛡️',
        message: 'Excellent ! Vous maîtrisez votre environnement numérique. Continuez à promouvoir le logiciel libre !',
        improvements,
      };
    }
    if (independencePercent >= 40) {
      return {
        score: gafamScore,
        total,
        level: 'moderate',
        title: 'Dépendance modérée ⚡',
        message: 'Vous êtes sur la bonne voie ! Quelques ajustements vous permettraient de gagner en indépendance.',
        improvements,
      };
    }
    return {
      score: gafamScore,
      total,
      level: 'dependent',
      title: 'Sous l\'emprise des GAFAM 🔒',
      message: 'Les géants du numérique contrôlent une grande partie de votre vie digitale. Il est temps d\'agir !',
      improvements,
    };
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setGafamScore(0);
    setHistory([]);
    setScreen('select');
    setMode(null);
  };

  const handleStartMode = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setScreen('quiz');
  };

  const handleShowFinal = () => {
    setScreen('final');
  };

  // Final screen with resources
  if (screen === 'final') {
    return (
      <FinalScreen
        quizScore={gafamScore}
        quizTotal={questions.length}
        onRestart={onRestart}
        onHome={onHome}
      />
    );
  }

  // Mode selection screen
  if (screen === 'select') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50">
        <div className="relative z-10 flex max-w-2xl flex-col items-center px-4 text-center">
          
          <button
            onClick={onClose}
            className="absolute -top-4 right-0 border-3 border-black bg-red-400 p-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <X size={20} />
          </button>

          
          <div className="relative mb-6">
            <TuxImage size={80} />
          </div>

          
          <h2 className="mb-2 text-3xl font-black uppercase text-black">
            Et maintenant...
          </h2>
          <p className="mb-8 text-lg font-bold text-black">
            À quel point êtes-vous sous l'emprise des GAFAM ?
            <br />
            <span className="text-base font-medium text-neutral-700">Faites le test pour le découvrir !</span>
          </p>

          
          <div className="mb-8 grid w-full gap-6 md:grid-cols-2">
            
            <button
              onClick={() => handleStartMode('fast')}
              className="group relative border-3 border-black bg-yellow-300 p-6 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
            >
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-3 border-black bg-white">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black">Mode Rapide</h3>
                    <p className="font-bold text-neutral-700">~2 minutes</p>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center gap-2 font-bold text-black">
                  <Clock size={16} />
                  <span>10 questions essentielles</span>
                </div>
                
                <p className="font-medium text-neutral-700">
                  Un aperçu rapide de votre dépendance aux géants du numérique.
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-lg font-black uppercase text-black">
                  Commencer <ArrowRight size={18} strokeWidth={3} />
                </div>
              </div>
            </button>

            
            <button
              onClick={() => handleStartMode('complete')}
              className="group relative border-3 border-black bg-cyan-300 p-6 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
            >
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border-3 border-black bg-white">
                    <ClipboardList className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-black">Mode Complet</h3>
                    <p className="font-bold text-neutral-700">~10 minutes</p>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center gap-2 font-bold text-black">
                  <Clock size={16} />
                  <span>40 questions détaillées</span>
                </div>
                
                <p className="font-medium text-neutral-700">
                  Une analyse complète de tous vos outils numériques avec des conseils personnalisés.
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-lg font-black uppercase text-black">
                  Commencer <ArrowRight size={18} strokeWidth={3} />
                </div>
              </div>
            </button>
          </div>

          
          <button
            onClick={onRestart}
            className="border-3 border-black bg-white px-4 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Passer et rejouer le jeu
          </button>
        </div>
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50 p-4">
      <div className="w-full max-w-md overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="flex items-center justify-between border-b-4 border-black bg-lime-300 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-3 border-black bg-white">
              {mode === 'fast' ? (
                <Zap className="h-5 w-5 text-black" />
              ) : (
                <ClipboardList className="h-5 w-5 text-black" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-black uppercase text-black">
                {mode === 'fast' ? 'Test Rapide' : 'Test Complet'}
              </h2>
              <p className="font-bold text-neutral-700">
                {mode === 'fast' ? '10 questions' : '40 questions'}
              </p>
            </div>
          </div>
          <button
            onClick={handleRestartQuiz}
            className="border-3 border-black bg-red-400 p-2 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <X size={18} />
          </button>
        </div>

        
        <div className="max-h-[70vh] overflow-y-auto bg-white">
          {screen === 'quiz' ? (
            <div className="p-4">
              <QuizProgress current={currentIndex} total={questions.length} />
              <QuizCard
                key={`${mode}-${currentIndex}`}
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
              />
            </div>
          ) : (
            <div>
              <QuizResultView
                result={getResult()}
                onRestart={handleRestartQuiz}
                onClose={handleShowFinal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
