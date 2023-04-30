import React from "react";
import { useViewMode, useViewModeContext } from "@/utils/ViewModeContext";

export default function ViewModeButton() {
    const viewMode = useViewMode();
    const toggleViewMode = useViewModeContext();

    return (
        <div>
            <button onClick={toggleViewMode}>Toggle View Mode</button>
            <span>Current View Mode: {viewMode}</span>
        </div>
    );
}
