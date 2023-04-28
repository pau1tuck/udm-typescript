import React from "react";
import Image from "next/image";
import { ITrack } from "@/types/Track.interface";
import TrackBoxImage from "@/components/TrackBoxes/TrackBoxImage";
import TrackBoxData from "@/components/TrackBoxes/TrackBoxData";

// Column widths:
const cw = {
    number: "20px",
    image: "56px",
    track: "1fr",
    label: "200px",
    controls: "200px",
    duration: "20px",
};

export default function TrackRow() {
    return (
        <div className="max-w-1280 mx-auto">
            <div
                className="grid h-56 gap-0"
                style={{
                    gridTemplateColumns: `${cw.number} ${cw.image} ${cw.track} ${cw.label} ${cw.controls} ${cw.duration}`,
                }}
            >
                <div className="bg-gray-200">#</div>
                <div className="bg-gray-300"> </div>
                <div className="bg-gray-400">Title, Artist</div>
                <div className="bg-gray-500">Label</div>
                <div className="bg-gray-600">T</div>
            </div>
            <div
                className="grid h-56 gap-0"
                style={{
                    gridTemplateColumns: `${cw.number} ${cw.image} ${cw.track} ${cw.label} ${cw.controls} ${cw.duration}`,
                }}
            >
                <div className="bg-gray-200">1</div>
                <div className="bg-gray-300">
                    <Image
                        src="https://via.placeholder.com/56"
                        alt="Album Cover"
                    />
                </div>
                <div className="bg-gray-400">Song Title, Artist Name</div>
                <div className="bg-gray-500">Record Label</div>
                <div className="bg-gray-600">Track Length</div>
            </div>
        </div>
    );
}
