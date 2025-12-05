export type NPCType = 'teacher' | 'student' | 'admin' | 'director' | 'sysadmin';
export type BuildingType = 'classroom' | 'office' | 'library' | 'computerLab' | 'cafeteria' | 'entrance';
export type MarkerStatus = 'locked' | 'problem' | 'in-progress' | 'resolved';

export interface DialogueChoice {
  id: string;
  text: string;
  outcome: 'success' | 'fail' | 'continue';
  nextDialogueId?: string;
  sovereigntyPoints?: number;
}

export interface Dialogue {
  id: string;
  speaker: 'npc' | 'tux' | 'clippy';
  speakerName: string;
  portrait: string;
  text: string;
  choices?: DialogueChoice[];
  nextDialogueId?: string;
}

export interface DialogueScript {
  id: string;
  npcType: NPCType;
  npcName: string;
  problemTitle: string;
  dialogues: Dialogue[];
}

export interface MapMarker {
  id: string;
  x: number;
  y: number;
  type: 'npc' | 'building' | 'computer';
  buildingType?: BuildingType;
  npcType?: NPCType;
  status: MarkerStatus;
  dialogueScriptId: string;
  label: string;
}

export interface GameState {
  sovereigntyScore: number;
  maxSovereigntyScore: number;
  resolvedMarkers: string[];
  currentDialogueScriptId: string | null;
  currentDialogueIndex: number;
  fogOfWarCleared: string[]; 
}

export interface Building {
  id: string;
  type: BuildingType;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isLocked: boolean;
}
