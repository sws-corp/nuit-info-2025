import { QuizQuestion } from "../types";
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // === Système d'exploitation ===
  {
    id: 1,
    question: "Votre ordinateur démarre-t-il directement sur Windows ou macOS sans que vous ayez choisi ce système ?",
    advice: "Linux (Ubuntu, Fedora, Mint) peut s'installer gratuitement et donne une seconde vie aux ordinateurs.",
  },
  {
    id: 2,
    question: "Avez-vous déjà envisagé d'installer un système d'exploitation différent de celui fourni par défaut ?",
    advice: "Explorer les alternatives comme Linux permet de mieux comprendre le fonctionnement de son ordinateur.",
  },
  
  // === Navigateur ===
  {
    id: 3,
    question: "Utilisez-vous le navigateur qui était installé par défaut sur votre appareil ?",
    advice: "Firefox est développé par une fondation à but non lucratif et respecte davantage la vie privée.",
  },
  {
    id: 4,
    question: "Votre navigateur vous propose-t-il des publicités personnalisées basées sur votre historique ?",
    advice: "Certains navigateurs comme Firefox ou Brave bloquent le pistage publicitaire par défaut.",
  },
  {
    id: 5,
    question: "Synchronisez-vous vos favoris et mots de passe avec un compte lié à une grande entreprise tech ?",
    advice: "Firefox Sync ou Bitwarden permettent la synchronisation sans exploitation commerciale de vos données.",
  },

  // === Moteur de recherche ===
  {
    id: 6,
    question: "Vos résultats de recherche sont-ils influencés par votre historique et votre profil ?",
    advice: "DuckDuckGo, Qwant ou Startpage offrent des résultats non personnalisés et sans pistage.",
  },
  {
    id: 7,
    question: "Savez-vous quelles données votre moteur de recherche collecte sur vous ?",
    advice: "Les moteurs comme Qwant (français) ou DuckDuckGo affichent clairement leur politique de non-collecte.",
  },

  // === Email ===
  {
    id: 8,
    question: "Votre fournisseur email analyse-t-il le contenu de vos messages pour cibler des publicités ?",
    advice: "ProtonMail ou Tutanota chiffrent vos emails et ne les analysent jamais.",
  },
  {
    id: 9,
    question: "Pourriez-vous facilement exporter tous vos emails vers un autre service si vous le souhaitiez ?",
    advice: "Privilégier des services avec export facile évite le verrouillage chez un fournisseur unique.",
  },
  {
    id: 10,
    question: "Votre service email a-t-il déjà été victime d'une fuite de données massive ?",
    advice: "Les services comme ProtonMail utilisent un chiffrement qui protège même en cas d'intrusion.",
  },

  // === Stockage cloud ===
  {
    id: 11,
    question: "Vos fichiers cloud sont-ils stockés dans des data centers dont vous ignorez la localisation ?",
    advice: "Nextcloud permet d'héberger ses fichiers chez un hébergeur local ou même chez soi.",
  },
  {
    id: 12,
    question: "Le service qui stocke vos fichiers peut-il techniquement y accéder et les lire ?",
    advice: "Certains services comme Nextcloud ou Cryptomator permettent un chiffrement côté client.",
  },
  {
    id: 13,
    question: "Payez-vous un abonnement cloud alors qu'un disque dur externe serait suffisant ?",
    advice: "Un NAS personnel ou Syncthing synchronise vos fichiers sans frais mensuels récurrents.",
  },
  {
    id: 14,
    question: "Dépendez-vous d'une connexion internet pour accéder à vos propres fichiers importants ?",
    advice: "Syncthing synchronise en pair-à-pair et garde une copie locale de tout.",
  },

  // === Réseaux sociaux ===
  {
    id: 15,
    question: "L'algorithme de votre réseau social principal décide-t-il ce que vous voyez dans votre fil ?",
    advice: "Mastodon affiche les publications par ordre chronologique, sans manipulation algorithmique.",
  },
  {
    id: 16,
    question: "Vos photos partagées en ligne peuvent-elles être utilisées pour entraîner des IA sans votre consentement ?",
    advice: "PixelFed et les instances Fediverse respectent généralement davantage les droits sur les images.",
  },
  {
    id: 17,
    question: "Avez-vous déjà remarqué que vos conversations privées influencent les publicités que vous voyez ?",
    advice: "Les réseaux décentralisés comme Mastodon n'ont pas de modèle économique basé sur la publicité.",
  },
  {
    id: 18,
    question: "Votre messagerie principale appartient-elle à Facebook/Meta ?",
    advice: "Signal offre le même confort avec un chiffrement véritablement open source et audité.",
  },
  {
    id: 19,
    question: "Passez-vous plus d'une heure par jour sur des applications qui captent votre attention ?",
    advice: "Les réseaux décentralisés et sans publicité n'ont pas d'intérêt à maximiser votre temps d'écran.",
  },
  {
    id: 20,
    question: "Votre réseau social connaît-il mieux votre vie professionnelle que vos proches ?",
    advice: "Un site personnel ou portfolio vous appartient et vous contrôlez ce que vous partagez.",
  },

  // === Streaming ===
  {
    id: 21,
    question: "Votre plateforme vidéo vous recommande-t-elle du contenu basé sur un profil qu'elle a créé de vous ?",
    advice: "Invidious, FreeTube ou NewPipe permettent de regarder sans pistage ni recommandations biaisées.",
  },
  {
    id: 22,
    question: "Payez-vous plusieurs abonnements de streaming qui, cumulés, dépassent 30€/mois ?",
    advice: "Les médiathèques offrent du streaming gratuit et légal. PeerTube propose du contenu libre.",
  },
  {
    id: 23,
    question: "Votre service de musique crée-t-il des playlists \"pour vous\" basées sur vos habitudes ?",
    advice: "Funkwhale ou des fichiers locaux vous libèrent des algorithmes de recommandation.",
  },
  {
    id: 24,
    question: "Regardez-vous des séries sur une plateforme qui analyse ce que vous regardez pour vous en vendre plus ?",
    advice: "Les médiathèques et le téléchargement légal offrent un accès sans surveillance commerciale.",
  },

  // === Achats en ligne ===
  {
    id: 25,
    question: "Votre premier réflexe d'achat en ligne est-il d'aller sur un site d'un géant du e-commerce ?",
    advice: "Les commerces locaux, Label Emmaüs ou les sites des fabricants sont souvent moins chers.",
  },

  // === Assistants vocaux et objets connectés ===
  {
    id: 26,
    question: "Y a-t-il chez vous un appareil qui écoute en permanence en attendant un mot-clé ?",
    advice: "Ces assistants transmettent des enregistrements. Mycroft est open source et fonctionne hors-ligne.",
  },
  {
    id: 27,
    question: "Vos objets connectés cessent-ils de fonctionner si leur fabricant ferme ses serveurs ?",
    advice: "Home Assistant permet de contrôler sa domotique localement, sans dépendance au cloud.",
  },

  // === Outils de travail ===
  {
    id: 28,
    question: "Devez-vous payer un abonnement mensuel pour éditer des documents texte ?",
    advice: "LibreOffice est gratuit, complet, compatible Office et ne nécessite aucun abonnement.",
  },
  {
    id: 29,
    question: "Vos documents de travail sont-ils automatiquement analysés par une IA cloud ?",
    advice: "CryptPad ou Etherpad offrent la collaboration en ligne avec chiffrement des données.",
  },
  {
    id: 30,
    question: "Devez-vous créer un compte pour participer à une visioconférence ?",
    advice: "Jitsi Meet fonctionne sans compte, gratuitement, directement dans le navigateur.",
  },
  {
    id: 31,
    question: "Votre outil de communication d'équipe stocke-t-il l'historique sur des serveurs que vous ne contrôlez pas ?",
    advice: "Element (Matrix) ou Mattermost peuvent être auto-hébergés pour garder le contrôle.",
  },
  {
    id: 32,
    question: "Vos notes personnelles sont-elles stockées uniquement dans le cloud d'une entreprise ?",
    advice: "Obsidian, Logseq ou Joplin stockent vos notes en local dans des fichiers que vous possédez.",
  },

  // === Téléphone ===
  {
    id: 33,
    question: "Votre téléphone envoie-t-il votre position à Google ou Apple même quand vous ne l'utilisez pas ?",
    advice: "LineageOS ou /e/OS permettent d'avoir Android sans cette télémétrie constante.",
  },
  {
    id: 34,
    question: "Seriez-vous incapable de changer de marque de téléphone sans perdre vos achats d'applications ?",
    advice: "Les applications libres (F-Droid) fonctionnent sur tout Android et ne vous enferment pas.",
  },
  {
    id: 35,
    question: "Installez-vous des applications sans vérifier les permissions qu'elles demandent ?",
    advice: "F-Droid propose des applications libres qui demandent uniquement les permissions nécessaires.",
  },

  // === Navigation et cartographie ===
  {
    id: 36,
    question: "Votre application GPS enregistre-t-elle tous vos déplacements ?",
    advice: "OsmAnd et Organic Maps utilisent OpenStreetMap et fonctionnent hors-ligne sans pistage.",
  },
  {
    id: 37,
    question: "Contribuez-vous gratuitement à enrichir les données d'un service qui les revend ?",
    advice: "OpenStreetMap est un projet collaboratif où vos contributions profitent à tous, pas à une entreprise.",
  },

  // === Photos ===
  {
    id: 38,
    question: "Vos photos personnelles servent-elles à entraîner la reconnaissance faciale d'une entreprise ?",
    advice: "Photoprism ou Immich analysent vos photos localement sans envoyer de données.",
  },
  {
    id: 39,
    question: "Perdriez-vous l'accès à vos souvenirs si vous arrêtiez de payer un abonnement cloud ?",
    advice: "Un NAS personnel ou un disque dur vous rend propriétaire permanent de vos photos.",
  },

  // === Sécurité ===
  {
    id: 40,
    question: "Vos mots de passe sont-ils stockés par une entreprise qui pourrait être piratée ou vendue ?",
    advice: "Bitwarden (open source) ou KeePassXC (local) vous donnent le contrôle de vos identifiants.",
  },
];