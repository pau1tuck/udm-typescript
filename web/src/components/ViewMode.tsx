import React from "react";
import { useViewMode, useViewModeContext } from "@/utils/ViewModeContext";

export default function ViewMode() {
    const viewMode = useViewMode();
    const toggleViewMode = useViewModeContext();

    return (
        <div>
            <button onClick={toggleViewMode}>Toggle Theme</button>
        </div>
    );
}
