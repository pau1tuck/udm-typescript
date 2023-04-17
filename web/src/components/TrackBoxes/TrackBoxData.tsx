import React from "react";
import { ITrackData } from "@/types/Track.interface";
import TrackTitle from "@/components/Track/TrackTitle";
import TrackVersion from "@/components/Track/TrackVersion";
import TrackArtist from "@/components/Track/TrackArtist";
import TrackLabel from "@/components/Track/TrackLabel";

export default function TrackBoxData(props: { track: ITrackData }) {
    const { track } = props;
    return (
        <div className="mt-3 font-cursive text-center text-white">
            <div className="mt-2 rounded-md ">
                <TrackTitle title={track.title} />
            </div>
            {track.version && (
                <div className="mt-2 rounded-md text-tertiary">
                    (<TrackVersion version={track.version} />)
                </div>
            )}
            <div className="mt-2 rounded-md text-primary">
                <TrackArtist artist={track.artist} />
            </div>
            <div className="mt-2 rounded-md text-secondary">
                [<TrackLabel label={track.label} />]
            </div>
        </div>
    );
}
