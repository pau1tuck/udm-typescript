import React from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";
import { listStyles } from "@/components/TrackList/TrackRowHeader";
import TrackTitle from "@/components/TrackData/TrackTitle";
import TrackVersion from "@/components/TrackData/TrackVersion";
import TrackArtist from "@/components/TrackData/TrackArtist";
import TrackLabel from "@/components/TrackData/TrackLabel";

export default function TrackRowData(props: {
    track: ITrackData;
    index: number;
}) {
    const { track, index } = props;
    return (
        <div
            className="grid gap-0 w-full bg-darkGray text-gray-500"
            style={{ gridTemplateRows: "auto auto" }}
        >
            <div className="grid gap-0 w-full " style={listStyles}>
                <div className="flex items-center justify-center">{index}</div>
                <div
                    className="hidden lg:inline-flex items-center"
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
                <div className="flex flex-col items-start justify-center pl-6 truncate">
                    <div className="text-white">
                        <TrackTitle title={track.title} />
                    </div>
                    <div className="text-primary">{track.artist}</div>
                </div>
                <div className="hidden lg:inline-flex items-center pl-2 text-secondary">
                    <TrackLabel label={track.label} />
                </div>
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
