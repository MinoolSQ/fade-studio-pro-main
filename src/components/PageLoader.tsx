import { useState, useEffect, useRef } from "react";
import { Scissors } from "lucide-react";

interface PageLoaderProps {
    onLoadingComplete?: () => void;
}

const PageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Start fade out after 1.3s (after rotation completes)
        const fadeTimer = setTimeout(() => {
            // Play click sound
            if (audioRef.current) {
                audioRef.current.play().catch(() => { });
            }
            setIsFadingOut(true);
            // Start revealing main page slightly before overlay fully fades
            onLoadingComplete?.();
        }, 1300);

        // Remove overlay completely after smooth fade (1.3s + 1.2s fade)
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isFadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Click sound */}
            <audio
                ref={audioRef}
                src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYNzJNMAAAAAAD/+9DEAAAH+ANntAAAJEwBqz81kAAAJtAG1dwAE5znOc7gIAmCYP5QEHygIP/BB///ygIP/KAg//5QEAQBAMAwD4f/E/+CDg+D4Pg+H/ygIAgCYJh/8oCD/ygf/lg+D/5z//BwfD4Pg+D7///+XwfB8HwfB8oCD4Pg+D4f///lAQf/+l8H/+Xwf/5fB//l8H/+Xwf/5fB//l8H//5QEAQBAMMP/BAOAAA//tQxA4AAADSAAAAAAAAANIAAAAASZmZmZmZgAAAAkkkkkkkAAAACNmZmZmZgAAAASSSSSSQAAAAI2ZmZmZmAAAAACSSSSSSAAAAAmZmZmZmAAAAAkkkkkkkAAAACNmZmZmZgAAAAJJJJJJAAAAACNmZmZmYAAAABJJJJJIAAAAAjZmZmZmAAAABJJJJJJAAAAACZmZmZmYAAAAEkkkkkgAAAA="
                preload="auto"
            />

            {/* Rotating Scissors */}
            <div className="relative">
                <Scissors
                    className="w-16 h-16 text-gold"
                    style={{
                        animation: "spinLoader 1.2s ease-out forwards",
                    }}
                />
            </div>

            {/* Custom keyframes */}
            <style>{`
        @keyframes spinLoader {
          from {
            transform: rotate(0deg) scale(1);
          }
          to {
            transform: rotate(360deg) scale(1.1);
          }
        }
      `}</style>
        </div>
    );
};

export default PageLoader;
