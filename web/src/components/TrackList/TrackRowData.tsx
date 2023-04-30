import React from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";
import { listStyles } from "@/components/TrackList/TrackRowHeader";
import TrackTitle from "@/components/TrackData/TrackTitle";
import TrackVersion from "@/components/TrackData/TrackVersion";
import TrackArtist from "@/components/TrackData/TrackArtist";
import TrackLabel from "@/components/TrackData/TrackLabel";

export default function TrackRowData(props: { track: ITrackData }) {
    const { track } = props;
    return (
        <div
            className="grid gap-0 w-full bg-darkGray text-gray-500"
            style={{ gridTemplateRows: "auto auto" }}
        >
            <div className="grid gap-0 w-full " style={listStyles}>
                <div className="flex items-center justify-center bg-gray-200">
                    1
                </div>
                <div className="bg-gray-300">
                    <Image
                        src="https://via.placeholder.com/56"
                        alt="Album Cover"
                        width={56}
                        height={56}
                    />
                </div>
                <div className="flex items-center pl-2 bg-gray-400">
                    Song Title, Artist Name
                </div>
                <div className="flex items-center pl-2 bg-gray-500">
                    Record Label
                </div>
                <div className="flex items-center justify-center bg-gray-600">
                    Controls
                </div>
                <div className="flex items-center justify-end pr-2 bg-gray-600">
                    04:31
                </div>
            </div>
        </div>
    );
}
