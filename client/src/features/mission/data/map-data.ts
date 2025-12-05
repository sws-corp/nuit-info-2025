import type { MapMarker, Building } from '../types';

// Map dimensions (virtual coordinates)
export const MAP_WIDTH = 1200;
export const MAP_HEIGHT = 800;

// Buildings layout
export const buildings: Building[] = [
  {
    id: 'entrance',
    type: 'entrance',
    name: 'Entrée du Lycée',
    x: 550,
    y: 650,
    width: 100,
    height: 80,
    isLocked: false,
  },
  {
    id: 'classroom_1',
    type: 'classroom',
    name: 'Salle de Cours A',
    x: 100,
    y: 100,
    width: 180,
    height: 150,
    isLocked: false,
  },
  {
    id: 'classroom_2',
    type: 'classroom',
    name: 'Salle de Cours B',
    x: 320,
    y: 100,
    width: 180,
    height: 150,
    isLocked: false,
  },
  {
    id: 'computer_lab',
    type: 'computerLab',
    name: 'Salle Informatique',
    x: 700,
    y: 100,
    width: 200,
    height: 180,
    isLocked: false,
  },
  {
    id: 'library',
    type: 'library',
    name: 'CDI - Bibliothèque',
    x: 100,
    y: 350,
    width: 200,
    height: 150,
    isLocked: false,
  },
  {
    id: 'office',
    type: 'office',
    name: 'Administration',
    x: 700,
    y: 350,
    width: 180,
    height: 150,
    isLocked: false,
  },
  {
    id: 'cafeteria',
    type: 'cafeteria',
    name: 'Cantine',
    x: 400,
    y: 400,
    width: 200,
    height: 120,
    isLocked: false,
  },
];

// NPC markers on the map
export const initialMarkers: MapMarker[] = [
  {
    id: 'marker_teacher',
    x: 190,
    y: 175,
    type: 'npc',
    npcType: 'teacher',
    status: 'problem',
    dialogueScriptId: 'teacher_update',
    label: 'Prof',
  },
  {
    id: 'marker_student',
    x: 800,
    y: 190,
    type: 'npc',
    npcType: 'student',
    status: 'problem',
    dialogueScriptId: 'student_code',
    label: 'Curiosix',
  },
  {
    id: 'marker_admin',
    x: 790,
    y: 425,
    type: 'npc',
    npcType: 'admin',
    status: 'problem',
    dialogueScriptId: 'admin_budget',
    label: 'Économix',
  },
  {
    id: 'marker_director',
    x: 200,
    y: 425,
    type: 'npc',
    npcType: 'director',
    status: 'problem',
    dialogueScriptId: 'director_obsolescence',
    label: 'Paniquix',
  },
  {
    id: 'marker_sysadmin',
    x: 500,
    y: 460,
    type: 'npc',
    npcType: 'sysadmin',
    status: 'problem',
    dialogueScriptId: 'sysadmin_virus',
    label: 'Sysadminix',
  },
];

export const getTotalSovereigntyPoints = (): number => {
  // Total possible points from all dialogues
  return 95; // 15 + 15 + 20 + 25 + 20
};
