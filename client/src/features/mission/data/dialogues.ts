import type { DialogueScript } from '../types';

export const dialogueScripts: DialogueScript[] = [
  {
    id: 'teacher_update',
    npcType: 'teacher',
    npcName: 'Prof',
    problemTitle: 'Mise à jour intempestive',
    dialogues: [
      {
        id: 'teacher_update_1',
        speaker: 'npc',
        speakerName: 'Prof',
        portrait: 'teacher',
        text: "Par Toutatis ! Mon cours commence dans 2 minutes et l'écran affiche 'Mise à jour 12%, ne pas éteindre'. C'est la troisième fois ce mois-ci !",
        nextDialogueId: 'teacher_update_2',
      },
      {
        id: 'teacher_update_2',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Il semble que vous essayiez d'enseigner ! Voulez-vous plutôt attendre 2 heures que Windows se mette à jour ? 📎",
        nextDialogueId: 'teacher_update_3',
      },
      {
        id: 'teacher_update_3',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Windows ne te demande pas la permission car tu n'es pas le propriétaire de ta machine. Avec Linux, c'est TOI le maître à bord !",
        choices: [
          {
            id: 'choice_wait',
            text: "Attendre la fin de la mise à jour...",
            outcome: 'fail',
            nextDialogueId: 'teacher_update_fail',
          },
          {
            id: 'choice_linux',
            text: "Installer Linux Mint !",
            outcome: 'success',
            sovereigntyPoints: 15,
            nextDialogueId: 'teacher_update_success',
          },
        ],
      },
      {
        id: 'teacher_update_fail',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Excellent choix ! Mise à jour : 13%... 13%... 13%... Erreur 0x80041021. Redémarrage nécessaire. 📎",
      },
      {
        id: 'teacher_update_success',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Parfait ! Les mises à jour se feront désormais quand TU le décides. Ton cours peut commencer immédiatement ! 🐧",
      },
    ],
  },
  {
    id: 'student_code',
    npcType: 'student',
    npcName: 'Curiosix',
    problemTitle: 'Code source inaccessible',
    dialogues: [
      {
        id: 'student_code_1',
        speaker: 'npc',
        speakerName: 'Curiosix',
        portrait: 'student',
        text: "Je voulais voir comment fonctionne ce programme pour mon cours de NSI, mais on me dit que le code est 'secret'. Comment je suis censé apprendre ?",
        nextDialogueId: 'student_code_2',
      },
      {
        id: 'student_code_2',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Le code est notre propriété intellectuelle ! Si tu veux voir du code, achète une licence développeur à 2000€/an ! 📎",
        nextDialogueId: 'student_code_3',
      },
      {
        id: 'student_code_3',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Cacher le code, c'est cacher la connaissance. L'école doit enseigner le PARTAGE, pas le secret industriel. Le logiciel libre est un livre ouvert !",
        choices: [
          {
            id: 'choice_pay',
            text: "Demander à l'école de payer la licence",
            outcome: 'fail',
            nextDialogueId: 'student_code_fail',
          },
          {
            id: 'choice_libre',
            text: "Utiliser des logiciels libres (Python, LibreOffice...)",
            outcome: 'success',
            sovereigntyPoints: 15,
            nextDialogueId: 'student_code_success',
          },
        ],
      },
      {
        id: 'student_code_fail',
        speaker: 'npc',
        speakerName: 'Curiosix',
        portrait: 'student',
        text: "Le budget est déjà épuisé pour les licences Windows... Je ne pourrai jamais apprendre comme ça.",
      },
      {
        id: 'student_code_success',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Excellent ! Avec Python et les logiciels libres, tu peux voir, modifier et partager le code. C'est ça, le vrai apprentissage ! 🐧",
      },
    ],
  },
  {
    id: 'admin_budget',
    npcType: 'admin',
    npcName: 'Économix',
    problemTitle: 'Budget licences épuisé',
    dialogues: [
      {
        id: 'admin_budget_1',
        speaker: 'npc',
        speakerName: 'Économix',
        portrait: 'admin',
        text: "Le budget est à sec. Microsoft demande 10 000€ de licences pour renouveler la salle informatique. On va devoir annuler le voyage scolaire !",
        nextDialogueId: 'admin_budget_2',
      },
      {
        id: 'admin_budget_2',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Puis-je vous suggérer notre offre 'Education Premium' à seulement 15 000€ ? Avec 3 mois d'antivirus gratuit ! 📎",
        nextDialogueId: 'admin_budget_3',
      },
      {
        id: 'admin_budget_3',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "L'argent public doit payer du CODE public. En passant au Libre, ces 10 000€ restent dans l'école pour les élèves, pas pour les actionnaires en Californie !",
        choices: [
          {
            id: 'choice_license',
            text: "Payer les licences Microsoft",
            outcome: 'fail',
            nextDialogueId: 'admin_budget_fail',
          },
          {
            id: 'choice_libre_office',
            text: "Migrer vers LibreOffice et Linux",
            outcome: 'success',
            sovereigntyPoints: 20,
            nextDialogueId: 'admin_budget_success',
          },
        ],
      },
      {
        id: 'admin_budget_fail',
        speaker: 'npc',
        speakerName: 'Économix',
        portrait: 'admin',
        text: "Le voyage scolaire est annulé. Les élèves sont déçus, mais au moins Microsoft est content...",
      },
      {
        id: 'admin_budget_success',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Bravo ! 10 000€ économisés ! Le voyage scolaire est maintenu ET vous avez des logiciels de qualité. C'est ça, la souveraineté numérique ! 🐧",
      },
    ],
  },
  {
    id: 'director_obsolescence',
    npcType: 'director',
    npcName: 'Paniquix',
    problemTitle: 'Obsolescence programmée',
    dialogues: [
      {
        id: 'director_obs_1',
        speaker: 'npc',
        speakerName: 'Paniquix',
        portrait: 'director',
        text: "On me dit que ces 50 PC portables sont bons pour la casse car ils ne supportent pas Windows 11. Ils ont à peine 4 ans ! Quel gâchis !",
        nextDialogueId: 'director_obs_2',
      },
      {
        id: 'director_obs_2',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Ces machines n'ont pas de puce TPM 2.0 ! Elles sont DANGEREUSES ! Achetez 50 nouveaux PC à 800€ pièce pour votre sécurité ! 📎",
        nextDialogueId: 'director_obs_3',
      },
      {
        id: 'director_obs_3',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "C'est de l'obsolescence PROGRAMMÉE ! Ces machines sont parfaites. Avec un système léger comme PrimTux ou Linux Mint, elles repartent pour 10 ans !",
        choices: [
          {
            id: 'choice_jeter',
            text: "Jeter les PC et en racheter",
            outcome: 'fail',
            nextDialogueId: 'director_obs_fail',
          },
          {
            id: 'choice_reconditionner',
            text: "Reconditionner avec Linux",
            outcome: 'success',
            sovereigntyPoints: 25,
            nextDialogueId: 'director_obs_success',
          },
        ],
      },
      {
        id: 'director_obs_fail',
        speaker: 'npc',
        speakerName: 'Paniquix',
        portrait: 'director',
        text: "40 000€ dépensés et 700kg de déchets électroniques générés. L'environnement et le budget en prennent un coup...",
      },
      {
        id: 'director_obs_success',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Excellent ! 50 PC sauvés de la déchetterie ! C'est le pilier DURABLE du NIRD : prolonger la vie du matériel plutôt que de le jeter. La planète vous remercie ! 🐧🌍",
      },
    ],
  },
  {
    id: 'sysadmin_virus',
    npcType: 'sysadmin',
    npcName: 'Sysadminix',
    problemTitle: 'Virus et réinstallations',
    dialogues: [
      {
        id: 'sysadmin_virus_1',
        speaker: 'npc',
        speakerName: 'Sysadminix',
        portrait: 'sysadmin',
        text: "Je passe mes nuits à nettoyer des virus et à réinstaller des postes plantés. La moitié des PC de la salle info sont inutilisables !",
        nextDialogueId: 'sysadmin_virus_2',
      },
      {
        id: 'sysadmin_virus_2',
        speaker: 'clippy',
        speakerName: 'Trombony',
        portrait: 'clippy',
        text: "Avez-vous essayé notre antivirus Microsoft Defender Premium+ Ultimate à seulement 50€/poste/an ? 📎",
        nextDialogueId: 'sysadmin_virus_3',
      },
      {
        id: 'sysadmin_virus_3',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "La MONOCULTURE logicielle favorise les épidémies ! Un parc hétérogène et sécurisé par design sous Linux supprime la majorité de ces risques.",
        choices: [
          {
            id: 'choice_antivirus',
            text: "Acheter plus d'antivirus",
            outcome: 'fail',
            nextDialogueId: 'sysadmin_virus_fail',
          },
          {
            id: 'choice_linux_secure',
            text: "Migrer vers Linux (sécurisé par design)",
            outcome: 'success',
            sovereigntyPoints: 20,
            nextDialogueId: 'sysadmin_virus_success',
          },
        ],
      },
      {
        id: 'sysadmin_virus_fail',
        speaker: 'npc',
        speakerName: 'Sysadminix',
        portrait: 'sysadmin',
        text: "Encore plus de logiciels qui ralentissent les PC... et les virus continuent de passer. Je vais encore faire une nuit blanche.",
      },
      {
        id: 'sysadmin_virus_success',
        speaker: 'tux',
        speakerName: 'Tux',
        portrait: 'tux',
        text: "Parfait ! Sous Linux, les droits utilisateurs sont stricts par défaut. Fini les .exe malveillants ! Tu vas enfin pouvoir dormir la nuit, Sysadminix ! 🐧😴",
      },
    ],
  },
];

export const getDialogueScript = (id: string): DialogueScript | undefined => {
  return dialogueScripts.find((script) => script.id === id);
};

export const getDialogueById = (scriptId: string, dialogueId: string) => {
  const script = getDialogueScript(scriptId);
  return script?.dialogues.find((d) => d.id === dialogueId);
};
