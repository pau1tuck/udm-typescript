import React from "react";
import { ITrackDataProps } from "@/types/Track.interface";
import TrackRowData from "@/components/ListView/TrackRowData";
import TrackRowImage from "@/components/ListView/TrackRowImage";
import TrackRowControls from "@/components/ListView/TrackRowControls";
import TrackTitle from "@/components/TrackData/TrackTitle";
import TrackVersion from "@/components/TrackData/TrackVersion";
import TrackArtist from "@/components/TrackData/TrackArtist";
import TrackLabel from "@/components/TrackData/TrackLabel";
import TrackDuration from "@/components/TrackData/TrackDuration";

export const listColumns =
    "grid-cols-[30px,5px,225px,5px,150px,5px] sm:grid-cols-[50px,5px,minmax(300px,1fr),5px,175px,5px] md:grid-cols-[70px,128px,minmax(300px,1fr),5px,200px,75px] lg:grid-cols-[50px,128px,1fr,225px,210px,75px]";

export const style = { gridTemplateRows: "auto auto" };

export default function TrackRow(props: {
    track: ITrackDataProps;
    index: number;
}) {
    const { track, index } = props;
    return (
        <div className="w-full mb-2">
            <TrackRowData
                trackRowDataProps={{
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
                            <div className="text-secondary">
                                <TrackArtist artist={track.artist} />
                            </div>
                        </div>
                    ),
                    label: (
                        <div className="font-standard">
                            <TrackLabel label={track.label} />
                        </div>
                    ),
                    controls: (
                        <div>
                            <TrackRowControls />
                        </div>
                    ),
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
