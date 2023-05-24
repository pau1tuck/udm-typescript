import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface IAudioPlayerProps {
    trackId: string;
    nowPlaying: boolean;
}

export const AudioPlayer = (props: IAudioPlayerProps) => {
    const [isClient, setIsClient] = useState(false);
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        setIsClient(true);
        if (props.nowPlaying) {
            // Play the audio
            playerRef.current?.getInternalPlayer()?.play();
        } else {
            // Pause the audio
            playerRef.current?.getInternalPlayer()?.pause();
        }
    }, [props.nowPlaying]);

    return isClient ? (
        <div style={{ width: "100%", height: "1px" }}>
            <ReactPlayer
                ref={playerRef}
                url={`/media/${props.trackId}`}
                controls={true}
                width="100%"
                height="100%"
                config={{
                    file: {
                        attributes: {
                            controlsList: "nodownload",
                            onContextMenu: (e: React.SyntheticEvent) =>
                                e.preventDefault(),
                        },
                    },
                }}
            />
        </div>
    ) : null;
};
