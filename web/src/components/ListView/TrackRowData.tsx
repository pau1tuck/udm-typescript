import React from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";
import TrackRow from "@/components/ListView/TrackRow";
import TrackRowImage from "@/components/ListView/TrackRowImage";
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
                    number: (
                        <div className="font-standard text-base">{index}</div>
                    ),
                    image: <TrackRowImage trackId={track.trackId} />,
                    titleArtist: (
                        <div className="flex flex-col font-standard">
                            <div className="flex">
                                <TrackTitle title={track.title} />
                                {track.version && (
                                    <>
                                        &nbsp; &nbsp;
                                        <TrackVersion version={track.version} />
                                    </>
                                )}
                            </div>
                            <TrackArtist artist={track.artist} />
                        </div>
                    ),
                    label: (
                        <div className="font-standard">
                            <TrackLabel label={track.label} />
                        </div>
                    ),
                    controls: "controols",
                    duration: (
                        <div className="font-standard text-base color-gray-600">
                            <TrackDuration duration={track.duration} />
                        </div>
                    ),
                }}
            />
        </div>
    );
}
