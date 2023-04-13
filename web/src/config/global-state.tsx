// src/contexts/GlobalStateContext.tsx
import { createContext, useContext, useState } from "react";

interface GlobalStateContextProps {
    nowPlaying: boolean;
    setNowPlaying: (value: boolean) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps>({
    nowPlaying: false,
    setNowPlaying: () => {},
});

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [nowPlaying, setNowPlaying] = useState<boolean>(false);

    return (
        <GlobalStateContext.Provider value={{ nowPlaying, setNowPlaying }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
