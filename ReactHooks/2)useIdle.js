import { useState, useEffect, useRef } from "react";

const useIdle = (delay = 3000) => {
    const [isIdle, setIsIdle] = useState(false);
    const timeoutId = useRef();

    const startTimer = () => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => setIsIdle(true), delay);
    };

    const resetTimer = () => {
        clearTimeout(timeoutId.current);
        setIsIdle(false);
        startTimer();
    };

    useEffect(() => {
        const events = [
            "mousemove",
            "mousedown",
            "keypress",
            "DOMMouseScroll",
            "mousewheel",
            "touchmove",
            "MSPointerMove",
        ];

        events.forEach((event) => document.addEventListener(event, resetTimer));
        window.addEventListener("blur", startTimer);
        window.addEventListener("focus", resetTimer);

        // Start initial timer
        startTimer();

        return () => {
            events.forEach((event) =>
                document.removeEventListener(event, resetTimer)
            );
            window.removeEventListener("blur", startTimer);
            window.removeEventListener("focus", resetTimer);
            clearTimeout(timeoutId.current);
        };
    }, [delay]); // rerun only if delay changes

    return isIdle;
};

export default useIdle;
