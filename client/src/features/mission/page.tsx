import { useState } from 'react';
import PanZoom from 'react-easy-panzoom';
import { useGameState } from './hooks/use-game-state';
import { buildings, MAP_WIDTH, MAP_HEIGHT } from './data/map-data';
import { SchoolMapSVG } from './components/svg/school-map';
import { MapMarkerComponent } from './components/map-marker';
import { DialogueBox } from './components/dialogue-box';
import { ProgressBar } from './components/progress-bar';
import { IntroOverlay } from './components/intro-overlay';
import { VictoryOverlay } from './components/victory-overlay';
import { HelpPanel } from './components/help-panel';
import { TuxGuide } from './components/tux-guide';

export function MissionPage() {
    const [gameStarted, setGameStarted] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const {
        gameState,
        markers,
        currentDialogue,
        isDialogueOpen,
        openDialogue,
        advanceDialogue,
        selectChoice,
        closeDialogue,
        getProgress,
        isGameComplete,
        resetGame,
    } = useGameState();

    const handleStart = () => {
        setGameStarted(true);
    };

    const handleRestart = () => {
        resetGame();
        setGameStarted(false);
    };

    
    const liberatedBuildings = markers
        .filter((m) => m.status === 'resolved')
        .map((m) => {
            
            const building = buildings.find(
                (b) =>
                    m.x >= b.x &&
                    m.x <= b.x + b.width &&
                    m.y >= b.y &&
                    m.y <= b.y + b.height
            );
            return building?.id;
        })
        .filter(Boolean) as string[];

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-white">
            
            {!gameStarted && <IntroOverlay onStart={handleStart} />}

            
            {gameStarted && isGameComplete() && (
                <VictoryOverlay
                    score={gameState.sovereigntyScore}
                    maxScore={gameState.maxSovereigntyScore}
                    onRestart={handleRestart}
                />
            )}

            
            {gameStarted && (
                <ProgressBar
                    progress={getProgress()}
                    score={gameState.sovereigntyScore}
                    maxScore={gameState.maxSovereigntyScore}
                />
            )}

            
            {gameStarted && !isDialogueOpen && (
                <button
                    onClick={() => setShowHelp(!showHelp)}
                    className="absolute right-4 top-4 z-40 rounded-none border-2 border-black bg-white px-3 py-2 font-mono text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
                >
                    ❓ Aide
                </button>
            )}

            
            <HelpPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />

            
            <PanZoom
                boundaryRatioVertical={0.8}
                boundaryRatioHorizontal={0.8}
                minZoom={0.5}
                maxZoom={2}
                enableBoundingBox
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: isDialogueOpen ? 'default' : 'grab',
                }}
            >
                <div
                    className="relative"
                    style={{
                        width: MAP_WIDTH,
                        height: MAP_HEIGHT,
                    }}
                >
                    
                    <SchoolMapSVG
                        buildings={buildings}
                        liberatedBuildings={liberatedBuildings}
                    />

                    
                    {markers.map((marker) => (
                        <MapMarkerComponent
                            key={marker.id}
                            marker={marker}
                            onClick={openDialogue}
                            isResolved={marker.status === 'resolved'}
                        />
                    ))}
                </div>
            </PanZoom>

            
            {isDialogueOpen && currentDialogue && (
                <DialogueBox
                    dialogue={currentDialogue}
                    onAdvance={advanceDialogue}
                    onSelectChoice={selectChoice}
                    onClose={closeDialogue}
                />
            )}

            
            {gameStarted && !isDialogueOpen && !showHelp && (
                <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-none border-2 border-black bg-white px-4 py-2">
                    <p className="font-mono text-xs text-black">
                        🖱️ Glissez pour naviguer • 👆 Cliquez sur les personnages pour les aider
                    </p>
                </div>
            )}

            
            {gameStarted && !isDialogueOpen && (
                <TuxGuide 
                    position="bottom-right"
                    message={
                        markers.every(m => m.status === 'resolved') 
                            ? undefined 
                            : markers.filter(m => m.status === 'problem').length === markers.length
                                ? "Bienvenue ! Clique sur les personnages en rouge pour commencer à les aider ! 🐧"
                                : `Super ! Il reste ${markers.filter(m => m.status === 'problem').length} villageois à aider !`
                    }
                />
            )}
        </div>
    );
}