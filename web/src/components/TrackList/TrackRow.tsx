import React from "react";
import { ITrack } from "@/types/Track.interface";
import TrackBoxImage from "@/components/TrackGrid/TrackBoxImage";
import TrackBoxData from "@/components/TrackGrid/TrackBoxData";

const listColumns = {
    gridColumn1: "20px",
    gridColumn2: "56px",
    gridColumn3: "1fr",
    gridColumn4: "200px",
    gridColumn5: "70px",
    gridColumn6: "210px",
    rowHeight: "56px",
};

const listStyles = {
    gridTemplateColumns: `${listColumns.gridColumn1} ${listColumns.gridColumn2} ${listColumns.gridColumn3} ${listColumns.gridColumn4} ${listColumns.gridColumn5} ${listColumns.gridColumn6}`,
    height: `${listColumns.rowHeight}`,
};

export default function TrackRow() {
    return (
        <div className="w-full">
            <div className="max-w-1280 mx-auto w-full">
                <div
                    className="grid gap-0 w-full"
                    style={{ gridTemplateRows: "auto auto" }}
                >
                    <div className="grid gap-0 w-full" style={listStyles}>
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
                <div className="grid gap-0 w-full" style={listStyles}></div>
            </div>
        </div>
    );
}
