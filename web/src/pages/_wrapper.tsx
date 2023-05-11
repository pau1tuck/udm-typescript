// components/Layout.tsx
import { useGlobalState } from "@/utils/GlobalStateProvider";
import Player from "@/components/AudioPlayer/Player";

type WrapperProps = {
    children: React.ReactNode;
    audioSrc: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    const { trackId, nowPlaying } = useGlobalState();

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
                <Player src={trackId} />
            </footer>
        </div>
    );
};

export default Wrapper;
