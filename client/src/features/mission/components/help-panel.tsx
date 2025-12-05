interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const helpItems = [
  {
    icon: '🖱️',
    title: 'Navigation',
    description: 'Glissez pour déplacer la carte, scrollez pour zoomer.',
  },
  {
    icon: '👤',
    title: 'Personnages',
    description: 'Cliquez sur les personnages avec un point rouge pour les aider.',
  },
  {
    icon: '💬',
    title: 'Dialogues',
    description: 'Lisez les dialogues et faites des choix pour résoudre les problèmes.',
  },
  {
    icon: '✅',
    title: 'Objectif',
    description: 'Libérez tous les personnages en choisissant les solutions open source !',
  },
];

export function HelpPanel({ isOpen, onClose }: HelpPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-50/90">
      <div className="relative w-full max-w-md overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="flex items-center justify-between border-b-4 border-black bg-lime-300 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-3 border-black bg-white">
              <span className="text-xl">❓</span>
            </div>
            <h2 className="text-lg font-black uppercase text-black">Comment Jouer</h2>
          </div>
          <button
            onClick={onClose}
            className="border-3 border-black bg-red-400 p-2 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>

        
        <div className="max-h-[70vh] overflow-y-auto p-4">
          <div className="space-y-4">
            {helpItems.map((item) => (
              <div
                key={item.title}
                className="border-3 border-black bg-yellow-100 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-3 border-black bg-white text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-black uppercase text-black">{item.title}</h3>
                    <p className="mt-1 font-medium text-neutral-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-6 border-3 border-black bg-cyan-200 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border-3 border-black bg-white text-2xl">
                💡
              </div>
              <div>
                <h3 className="text-base font-black uppercase text-black">Astuce</h3>
                <p className="mt-1 font-medium text-neutral-700">
                  Tux (le pingouin) propose toujours la solution open source !
                </p>
              </div>
            </div>
          </div>

          
          <button
            onClick={onClose}
            className="mt-6 w-full border-3 border-black bg-lime-300 px-4 py-3 font-black uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            C'est compris !
          </button>
        </div>
      </div>
    </div>
  );
}
