import { useState, useCallback } from 'react';
import type { GameState, MapMarker, DialogueChoice } from '../types';
import { initialMarkers, getTotalSovereigntyPoints } from '../data/map-data';
import { getDialogueScript, getDialogueById } from '../data/dialogues';

const INITIAL_STATE: GameState = {
  sovereigntyScore: 0,
  maxSovereigntyScore: getTotalSovereigntyPoints(),
  resolvedMarkers: [],
  currentDialogueScriptId: null,
  currentDialogueIndex: 0,
  fogOfWarCleared: [],
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [markers, setMarkers] = useState<MapMarker[]>(initialMarkers);
  const [currentDialogueId, setCurrentDialogueId] = useState<string | null>(null);

  const openDialogue = useCallback((markerId: string) => {
    const marker = markers.find((m) => m.id === markerId);
    if (!marker || marker.status === 'resolved') return;

    const script = getDialogueScript(marker.dialogueScriptId);
    if (!script) return;

    setGameState((prev) => ({
      ...prev,
      currentDialogueScriptId: marker.dialogueScriptId,
      currentDialogueIndex: 0,
    }));
    
    // Set to first dialogue
    setCurrentDialogueId(script.dialogues[0].id);
    
    // Update marker status
    setMarkers((prev) =>
      prev.map((m) =>
        m.id === markerId ? { ...m, status: 'in-progress' as const } : m
      )
    );
  }, [markers]);

  const closeDialogue = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      currentDialogueScriptId: null,
      currentDialogueIndex: 0,
    }));
    setCurrentDialogueId(null);
  }, []);

  const advanceDialogue = useCallback(() => {
    if (!gameState.currentDialogueScriptId || !currentDialogueId) return;

    const script = getDialogueScript(gameState.currentDialogueScriptId);
    const currentDialogue = getDialogueById(gameState.currentDialogueScriptId, currentDialogueId);
    
    if (!script || !currentDialogue) return;

    // If there are choices, don't auto-advance
    if (currentDialogue.choices && currentDialogue.choices.length > 0) return;

    // If there's a next dialogue, go to it
    if (currentDialogue.nextDialogueId) {
      setCurrentDialogueId(currentDialogue.nextDialogueId);
      setGameState((prev) => ({
        ...prev,
        currentDialogueIndex: prev.currentDialogueIndex + 1,
      }));
    } else {
      // End of dialogue without choices - close it
      closeDialogue();
    }
  }, [gameState.currentDialogueScriptId, currentDialogueId, closeDialogue]);

  const selectChoice = useCallback((choice: DialogueChoice) => {
    if (!gameState.currentDialogueScriptId) return;

    const currentMarker = markers.find(
      (m) => m.dialogueScriptId === gameState.currentDialogueScriptId
    );

    if (choice.outcome === 'success') {
      // Add sovereignty points
      const points = choice.sovereigntyPoints || 0;
      
      setGameState((prev) => ({
        ...prev,
        sovereigntyScore: prev.sovereigntyScore + points,
      }));

      // Update marker to resolved
      if (currentMarker) {
        setMarkers((prev) =>
          prev.map((m) =>
            m.id === currentMarker.id ? { ...m, status: 'resolved' as const } : m
          )
        );

        // Add to resolved markers
        setGameState((prev) => ({
          ...prev,
          resolvedMarkers: [...prev.resolvedMarkers, currentMarker.id],
        }));
      }
    }

    // Navigate to next dialogue if exists
    if (choice.nextDialogueId) {
      setCurrentDialogueId(choice.nextDialogueId);
      setGameState((prev) => ({
        ...prev,
        currentDialogueIndex: prev.currentDialogueIndex + 1,
      }));
    } else {
      // Close dialogue after choice with no next
      setTimeout(() => closeDialogue(), 2000);
    }
  }, [gameState.currentDialogueScriptId, markers, closeDialogue]);

  const getCurrentDialogue = useCallback(() => {
    if (!gameState.currentDialogueScriptId || !currentDialogueId) return null;
    return getDialogueById(gameState.currentDialogueScriptId, currentDialogueId);
  }, [gameState.currentDialogueScriptId, currentDialogueId]);

  const getProgress = useCallback(() => {
    return (gameState.sovereigntyScore / gameState.maxSovereigntyScore) * 100;
  }, [gameState.sovereigntyScore, gameState.maxSovereigntyScore]);

  const isGameComplete = useCallback(() => {
    return markers.every((m) => m.status === 'resolved');
  }, [markers]);

  const resetGame = useCallback(() => {
    setGameState(INITIAL_STATE);
    setMarkers(initialMarkers);
    setCurrentDialogueId(null);
  }, []);

  return {
    gameState,
    markers,
    currentDialogue: getCurrentDialogue(),
    isDialogueOpen: currentDialogueId !== null,
    openDialogue,
    advanceDialogue,
    selectChoice,
    closeDialogue,
    getProgress,
    isGameComplete,
    resetGame,
  };
}
