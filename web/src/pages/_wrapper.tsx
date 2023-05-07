// components/Layout.tsx
import Player from "@/components/AudioPlayer/Player";

type WrapperProps = {
    children: React.ReactNode;
    audioSrc: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, audioSrc }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
                <Player src={audioSrc} />
            </footer>
        </div>
    );
};

export default Wrapper;
