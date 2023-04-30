import React, { createContext, useContext, useState } from "react";
import { ViewMode } from "@/types/ViewMode.enum";

interface ViewModeProviderProps {
    children: React.ReactNode;
}

const ViewModeContext = createContext(ViewMode.GRID);
const ViewModeUpdateContext = createContext<() => void>(() => {});

export const useViewMode = () => {
    return useContext(ViewModeContext);
};

export const useViewModeUpdate = () => {
    return useContext(ViewModeUpdateContext);
};

export default function ViewModeProvider({ children }: ViewModeProviderProps) {
    const [viewMode, setViewMode] = useState(ViewMode.GRID);
    const toggleViewMode = () => {
        setViewMode((prevViewMode) =>
            prevViewMode === ViewMode.GRID ? ViewMode.LIST : ViewMode.GRID
        );
    };
    return (
        <ViewModeContext.Provider value={viewMode}>
            <ViewModeUpdateContext.Provider value={toggleViewMode}>
                {children}
            </ViewModeUpdateContext.Provider>
        </ViewModeContext.Provider>
    );
}
