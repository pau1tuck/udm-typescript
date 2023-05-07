// components/AudioPlayer.tsx
import { useEffect, useRef } from "react";

type PlayerProps = {
    src: string;
};

const Player: React.FC<PlayerProps> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.src = src;
    }, [src]);

    return (
        <div className="w-full flex justify-center">
            <audio
                ref={audioRef}
                controls
                preload="none"
                className="w-full max-w-md"
            >
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Player;
