import React from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";
import TrackRow from "@/components/ListView/TrackRow";
import TrackTitle from "@/components/TrackData/TrackTitle";
import TrackVersion from "@/components/TrackData/TrackVersion";
import TrackArtist from "@/components/TrackData/TrackArtist";
import TrackLabel from "@/components/TrackData/TrackLabel";
import TrackDuration from "@/components/TrackData/TrackDuration";

export default function TrackRowData(props: {
    track: ITrackData;
    index: number;
}) {
    const { track, index } = props;
    return (
        <div className="w-full">
            <TrackRow
                trackRowProps={{
                    track: track,
                    number: index,
                    image: (
                        <Image
                            src="https://via.placeholder.com/128x72.png"
                            alt="Album Cover"
                            width={128}
                            height={72}
                        />
                    ),
                    titleArtist: (
                        <>
                            <TrackTitle title={track.title} />
                            <TrackVersion version={track.version} />
                            <TrackArtist artist={track.artist} />
                        </>
                    ),
                    label: <TrackLabel label={track.label} />,
                    controls: "controols",
                    duration: <TrackDuration duration={track.duration}>,
                }}
            />
        </div>
    );
}
