"use client";
import { useGlobalState } from "@/config/global-state";
import { AudioPlayer } from "./AudioPlayer";

type TWrapperProps = {
    children: React.ReactNode;
    audioSrc: string;
};

export const AudioWrapper: React.FC<TWrapperProps> = ({ children }) => {
    const { trackId, nowPlaying } = useGlobalState();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
                <AudioPlayer />
            </footer>
        </div>
    );
};
