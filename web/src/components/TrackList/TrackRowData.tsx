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
                <div className="flex items-center justify-center">1</div>
                <div
                    className="flex items-center"
                    style={{
                        position: "relative",
                        width: "128px",
                        height: "72px",
                    }}
                >
                    <Image
                        src="https://via.placeholder.com/128x72.png"
                        alt="Album Cover"
                        width={128}
                        height={72}
                    />
                </div>
                <div className="flex items-center pl-6">
                    Song Title, Artist Name
                </div>
                <div className="flex items-center pl-2 ">Record Label</div>
                <div className="flex items-center justify-center ">
                    Controls
                </div>
                <div className="flex items-center justify-center pr-2 ">
                    04:31
                </div>
            </div>
        </div>
    );
}
