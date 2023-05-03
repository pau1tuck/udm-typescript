// src/contexts/GlobalStateContext.tsx
import { createContext, useContext, useState } from "react";

interface GlobalStateContextProps {
    nowPlaying: boolean;
    setNowPlaying: (value: boolean) => void;
    trackId: string | null;
    setTrackId: (value: string | null) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps>({
    nowPlaying: false,
    setNowPlaying: () => {},
    trackId: null,
    setTrackId: () => {},
});

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [nowPlaying, setNowPlaying] = useState<boolean>(false);
    const [trackId, setTrackId] = useState<string | null>(null);

    return (
        <GlobalStateContext.Provider
            value={{ nowPlaying, setNowPlaying, trackId, setTrackId }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};
