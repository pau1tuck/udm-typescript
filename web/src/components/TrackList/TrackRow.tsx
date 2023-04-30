import React from "react";
import Image from "next/image";
import { ITrack } from "@/types/Track.interface";
import TrackBoxImage from "@/components/TrackGrid/TrackBoxImage";
import TrackBoxData from "@/components/TrackGrid/TrackBoxData";

// Column widths:
export const columnWidth = {
    number: "20px",
    image: "56px",
    track: "1fr",
    label: "200px",
    duration: "20px",
    controls: "200px",
};

export const gridColumns = {
    gridColumn1: "20px",
    gridColumn2: "56px",
    gridColumn3: "1fr",
    gridColumn4: "200px",
    gridColumn5: "70px",
    gridColumn6: "210px",
    rowHeight: "56px",
};

export default function TrackRow() {
    return (
        <div className="w-full">
            <div className="max-w-1280 mx-auto w-full">
                <div
                    className="grid gap-0 w-full"
                    style={{ gridTemplateRows: "auto auto" }}
                >
                    <div
                        className="grid gap-0 w-full"
                        style={{
                            gridTemplateColumns: `${gridColumns.gridColumn1} ${gridColumns.gridColumn2} ${gridColumns.gridColumn3} ${gridColumns.gridColumn4} ${gridColumns.gridColumn5} ${gridColumns.gridColumn6}`,
                            height: gridColumns.rowHeight,
                        }}
                    >
                        <div className="flex items-center justify-center bg-gray-200">
                            #
                        </div>
                        <div className="flex items-center bg-gray-300"> </div>
                        <div className="flex items-center pl-2 bg-gray-400">
                            Title, Artist
                        </div>
                        <div className="flex items-center pl-2 bg-gray-500">
                            Label
                        </div>
                        <div className="flex items-center justify-center bg-gray-600">
                            T
                        </div>
                        <div className="flex items-center bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
