import React from "react";
import { ViewMode } from "@/types/ViewMode.enum";
import { useViewMode, useViewModeContext } from "@/utils/ViewModeContext";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

export default function ViewModeButton() {
    const viewMode = useViewMode();
    const toggleViewMode = useViewModeContext();

    return (
        <div
            onClick={toggleViewMode}
            className="cursor-pointer text-4xl text-gray-500 "
        >
            {viewMode == ViewMode.GRID ? <FaList /> : <TfiLayoutGrid2Alt />}
        </div>
    );
}
