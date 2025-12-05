import flyerImage from '../../assets/femme/flyer.jpg';

export function FemmeInformatique() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050510] text-gray-200">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-lg border border-white/10 py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider">
                <span className="text-cyan-400">NUIT</span>
                DE
                <span className="text-purple-500">L'INFO</span>
              </span>
            </div>
            <nav className="flex gap-6">
              <a href="#flyer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Le flyer
              </a>
              <a href="#video" className="text-gray-300 hover:text-cyan-400 transition-colors">
                La vidéo
              </a>
              <a href="#propos" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Le Projet
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-12 flex flex-col gap-24">
        
        {/* Flyer Section */}
        <section id="flyer" className="flex flex-col items-center animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent [text-shadow:0_0_10px_rgba(0,255,255,0.7)]">
            Le flyer
          </h1>
          <div className="relative max-w-3xl w-full group">
            <div className="absolute inset-[-1px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-md opacity-25 group-hover:opacity-75 transition-opacity" />
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-cyan-400/30">
              <img 
                src={flyerImage} 
                alt="Flyer Nuit de l'Info 2025 - Mixons le Code" 
                className="w-full h-auto block transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="flex flex-col items-center">
          <div className="w-full max-w-4xl mb-6 border-l-4 border-purple-500 pl-4 text-left">
            <h2 className="text-3xl font-bold text-purple-400">
              LE BUG CRITIQUE
            </h2>
            <p className="text-gray-400">Regardez notre vidéo</p>
          </div>
          
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <iframe 
              src="https://drive.google.com/file/d/1ths2OYZQOQAmTX5VfwzW_rEAcwlpGTmz/preview"
              className="w-full aspect-video block"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </section>

        {/* About Section */}
        <section id="propos" className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full blur-[40px] opacity-20 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-600 rounded-full blur-[40px] opacity-20 -z-10" />

            <h2 className="text-3xl font-bold mb-6 text-white border-b border-gray-700 pb-4">
              Patchons le système : <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">pour une informatique au pluriel</span>
            </h2>
            
            <div className="text-lg text-gray-300 leading-relaxed text-justify flex flex-col gap-4">
              <p>
                L'informatique n'a jamais été une affaire exclusivement masculine. Si l'on regarde le <span className="text-cyan-400">code source de l'Histoire</span>, on y trouve une multitude de femmes comme par exemple <strong>Ada Lovelace</strong>, <strong>Grace Hopper</strong> ou encore <strong>Margaret Hamilton</strong>.
              </p>
              <p>
                Pourtant, aujourd'hui, une <span className="text-red-400 font-mono">erreur</span> s'est glissée dans le système : les femmes sont devenues trop rares dans nos formations et nos métiers.
              </p>
              <p className="bg-gray-800/50 p-4 rounded border-l-4 border-cyan-500 italic">
                Pour ce défi, notre équipe a choisi d'aborder ce sujet sous l'angle du « <strong>bug critique</strong> ». À travers une vidéo au rythme soutenu, nous illustrons ce manque de mixité comme une défaillance technique qu'il est urgent de corriger. Car un programme ne peut pas tourner à plein régime s'il lui manque une partie de ses données essentielles.
              </p>
              <p>
                Notre message est simple : <span className="text-purple-400 font-bold">la diversité est une puissance de calcul supplémentaire</span>.
              </p>
              <p>
                Pour innover et créer des solutions pertinentes, le numérique a besoin de tous les regards.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 mt-12">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-2">Défi ACDI - Nuit de l'Info 2025</p>
          <p className="text-xs text-gray-700 font-mono">
            Projet réalisé par l'équipe Smart World Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}