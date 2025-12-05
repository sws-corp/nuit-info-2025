import { ExternalLink, BookOpen, Video, Headphones, GraduationCap, ArrowRight, Home, RotateCcw } from 'lucide-react';
import { TuxImage } from './tux-image';

interface FinalScreenProps {
  quizScore?: number;
  quizTotal?: number;
  onRestart: () => void;
  onHome: () => void;
}

const RESOURCES = {
  official: {
    title: 'Site officiel NIRD',
    url: 'https://nird.forge.apps.education.fr/',
    description: 'La démarche Numérique Inclusif, Responsable et Durable',
    icon: '🌐',
  },
  media: [
    {
      title: 'Windows 11 : l\'alternative des logiciels libres',
      url: 'https://video.echirolles.fr/w/hVykGUtRZqRen6eiutqRvQ',
      source: 'France 3 Alpes',
      duration: '2 min',
      type: 'video' as const,
      date: 'Octobre 2025',
    },
    {
      title: 'Face à l\'obsolescence programmée, le logiciel libre comme solution ?',
      url: 'https://www.radiofrance.fr/franceinter/podcasts/le-grand-reportage-de-france-inter/le-grand-reportage-du-mardi-14-octobre-2025-4136495',
      source: 'France Inter',
      duration: '4 min',
      type: 'audio' as const,
      date: 'Octobre 2025',
    },
    {
      title: 'L\'État obligé de jeter des milliers d\'ordinateurs ?',
      url: 'https://www.youtube.com/watch?v=76T8oubek-c',
      source: 'France Info',
      duration: '3 min',
      type: 'video' as const,
      date: 'Septembre 2025',
    },
    {
      title: 'L\'Ordinateur Obsolète',
      url: 'https://www.youtube.com/watch?v=S6GLqkhykmA',
      source: 'Back Market',
      duration: '1 min',
      type: 'video' as const,
    },
  ],
  project: [
    {
      title: 'Voyage au centre du libre éducatif',
      url: 'https://www.cafepedagogique.net/2025/04/27/bruay-labuissiere-voyage-au-centre-du-libre-educatif/',
      source: 'Café Pédagogique',
      description: 'Le projet NIRD au lycée Carnot de Bruay-la-Buissière',
    },
    {
      title: '"Linux, c\'est facile !" - Intervention des élèves',
      url: 'https://tube-numerique-educatif.apps.education.fr/w/3LXem3XK4asbwZa5R1qGkW',
      source: 'Tube Numérique Éducatif',
      duration: '5 min',
    },
    {
      title: 'Le projet NIRD présenté par les élèves',
      url: 'https://tube-numerique-educatif.apps.education.fr/w/pZCnzPKTYX2iF38Qh4ZGmq',
      source: 'Tube Numérique Éducatif',
      duration: '4 min',
    },
  ],
};

export function FinalScreen({ quizScore, quizTotal, onRestart, onHome }: FinalScreenProps) {
  const independencePercent = quizScore !== undefined && quizTotal 
    ? Math.round(((quizTotal - quizScore) / quizTotal) * 100)
    : null;

  const getScoreMessage = () => {
    if (independencePercent === null) return null;
    if (independencePercent >= 70) return { text: 'Résistant numérique !', bg: 'bg-lime-300' };
    if (independencePercent >= 40) return { text: 'En voie de libération', bg: 'bg-yellow-300' };
    return { text: 'Sous emprise GAFAM', bg: 'bg-red-300' };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-amber-50">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 md:py-12">
        
        <div className="mb-10 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <TuxImage size={80} />
          </div>
          
          <h1 className="mb-2 text-3xl font-black uppercase text-black md:text-4xl">
            Merci d'avoir joué !
          </h1>
          <p className="text-lg font-bold text-neutral-700">Nuit de l'Info 2025 • Démarche NIRD</p>

          
          {scoreInfo && (
            <div className={`mx-auto mt-6 max-w-md border-4 border-black ${scoreInfo.bg} p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
              <p className="mb-2 font-bold text-neutral-700">Votre score d'indépendance numérique</p>
              <p className="text-5xl font-black text-black">{independencePercent}%</p>
              <p className="mt-2 text-xl font-black uppercase text-black">{scoreInfo.text}</p>
            </div>
          )}
        </div>

        
        <a
          href={RESOURCES.official.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 flex items-center gap-4 border-4 border-black bg-cyan-300 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
        >
          <div className="flex h-14 w-14 items-center justify-center border-3 border-black bg-white text-3xl">
            {RESOURCES.official.icon}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-black uppercase text-black">{RESOURCES.official.title}</h2>
            <p className="font-bold text-neutral-700">{RESOURCES.official.description}</p>
          </div>
          <ExternalLink className="h-6 w-6 text-black transition-transform group-hover:translate-x-1" strokeWidth={3} />
        </a>

        
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-3 border-black bg-yellow-300">
              <BookOpen className="h-5 w-5 text-black" />
            </div>
            <h2 className="text-xl font-black uppercase text-black">Dans les médias</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {RESOURCES.media.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 border-3 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-3 border-black bg-lime-300">
                  {item.type === 'video' ? (
                    <Video className="h-5 w-5 text-black" />
                  ) : (
                    <Headphones className="h-5 w-5 text-black" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-black text-sm leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-bold text-neutral-600">
                    <span>{item.source}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-black transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </a>
            ))}
          </div>
        </section>

        
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-3 border-black bg-cyan-300">
              <GraduationCap className="h-5 w-5 text-black" />
            </div>
            <h2 className="text-xl font-black uppercase text-black">Le projet NIRD - Lycée Carnot</h2>
          </div>
          <p className="mb-4 font-bold text-neutral-700">
            Le projet NIRD est né au lycée Carnot de Bruay-la-Buissière (Hauts-de-France). 
            La démarche cherche à étendre ce projet au maximum d'établissements scolaires.
          </p>
          
          <div className="grid gap-4">
            {RESOURCES.project.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-3 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-3 border-black bg-pink-300">
                  <Video className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-black text-sm">
                    {item.title}
                  </h3>
                  <div className="mt-0.5 flex items-center gap-2 text-xs font-bold text-neutral-600">
                    <span>{item.source}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-black transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </a>
            ))}
          </div>
        </section>

        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 border-4 border-black bg-yellow-300 px-6 py-3 font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            <RotateCcw size={20} strokeWidth={3} />
            Rejouer la mission
          </button>
          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 border-4 border-black bg-lime-300 px-6 py-3 font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            <Home size={20} strokeWidth={3} />
            Retour à l'accueil
          </button>
        </div>

        
        <p className="mt-10 text-center font-bold text-neutral-600">
          Réalisé pour la Nuit de l'Info 2025 • Promouvoir le Numérique Inclusif, Responsable et Durable
        </p>
      </div>
    </div>
  );
}
