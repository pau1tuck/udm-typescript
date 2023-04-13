// src/contexts/GlobalStateContext.tsx
import { createContext, useContext, useState } from "react";

interface GlobalStateContextProps {
    isTrue: boolean;
    setIsTrue: (value: boolean) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps>({
    isTrue: false,
    setIsTrue: () => {},
});

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [isTrue, setIsTrue] = useState<boolean>(false);

    return (
        <GlobalStateContext.Provider value={{ isTrue, setIsTrue }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
