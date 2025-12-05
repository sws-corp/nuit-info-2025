import { useState, useEffect, useCallback } from "react";

const MESSAGES = [
    "Défaillance du système...",
    "Bienvenue de l'autre côté.",
    "Le village a besoin de vous.",
    "Échappez à l'obsolescence.",
    "La résistance se charge...",
];

export function DialogueBox() {
    const [displayedText, setDisplayedText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        setDisplayedText("");
        setIsTyping(true);

        let index = 0;
        const text = MESSAGES[messageIndex];

        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.substring(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);

                // Move to next message after delay
                setTimeout(() => {
                    setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
                }, 2000);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [messageIndex]);

    const handleClick = useCallback(() => {
        if (isTyping) {
            setDisplayedText(MESSAGES[messageIndex]);
            setIsTyping(false);
        } else {
            setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
        }
    }, [isTyping, messageIndex]);

    return (
        <div className="absolute inset-x-0 bottom-0 z-50 flex justify-center p-4 md:p-6">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div
                className="relative flex w-full max-w-4xl cursor-pointer flex-col border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:flex-row"
                onClick={handleClick}
            >
                {/* Portrait section */}
                <div className="relative flex h-28 w-full shrink-0 items-center justify-center border-b-2 border-black bg-neutral-100 md:h-auto md:w-36 md:border-b-0 md:border-r-2">
                    <div className="relative z-10">
                        <img
                            src="/tux/tux.png"
                            alt="Tux"
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                </div>

                {/* Content section */}
                <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-black">
                                Tux
                            </h3>
                            <span className="border border-black px-2 py-0.5 text-xs font-medium text-black">
                                GUIDE
                            </span>
                        </div>

                        {/* Message text */}
                        <p className="min-h-16 text-base leading-relaxed text-neutral-700 md:text-lg">
                            <span>{displayedText}</span>
                            {isTyping && (
                                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-black" />
                            )}
                        </p>
                    </div>

                    {/* Action section */}
                    <div className="mt-4 flex flex-wrap gap-3">
                        {!isTyping && (
                            <a
                                href="/mission"
                                onClick={(e) => e.stopPropagation()}
                                className="border-2 border-black bg-neutral-100 px-4 py-2.5 font-medium text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:bg-black hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                            >
                                Commencer la mission
                            </a>
                        )}

                        {isTyping && (
                            <div className="flex items-center gap-2 text-sm text-neutral-500">
                                <span className="animate-bounce">↓</span>
                                <span className="animate-pulse">
                                    Cliquez pour continuer...
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
