import { ITrack, ITrackData } from "@/types/Track.interface";
import React from "react";

interface TrackRowProps {
    track?: ITrackData;
    number: React.ReactNode;
    image: React.ReactNode;
    titleArtist: React.ReactNode;
    label: React.ReactNode;
    controls: React.ReactNode;
    duration: React.ReactNode;
}

const listColumns =
    "grid-cols-[30px,5px,225px,5px,150px,5px] sm:grid-cols-[50px,5px,minmax(300px,1fr),5px,175px,5px] md:grid-cols-[50px,128px,minmax(300px,1fr),5px,200px,75px] lg:grid-cols-[50px,128px,1fr,225px,210px,75px]";

export default function TrackRowHeader(props: {
    trackRowProps: TrackRowProps;
}) {
    const { number, image, titleArtist, label, controls, duration } =
        props.trackRowProps;

    return (
        <div className="max-w-1280 mx-auto w-full">
            <div
                className="grid gap-0 w-full font-body font-bold bg-darkGray text-gray-500"
                style={{ gridTemplateRows: "auto auto" }}
            >
                <div
                    className={`grid gap-0 w-full h-[72px] whitespace-nowrap ${listColumns}`}
                >
                    <div
                        id="number"
                        className="inline-flex items-center justify-center md:mr-3 md:ml-3 text-xl"
                    >
                        {number}
                    </div>
                    <div
                        id="image"
                        className="hidden sm:inline-flex items-center"
                    >
                        {image}
                    </div>
                    <div
                        id="dummy-1"
                        className="inline-flex sm:hidden items-center"
                    ></div>
                    <div
                        id="title-artist"
                        className="inline-flex items-center pl-2 sm:pl-2 md:pl-6 "
                    >
                        {titleArtist}
                    </div>
                    <div
                        id="dummy-2"
                        className="inline-flex lg:hidden items-center"
                    ></div>
                    <div
                        id="label"
                        className="hidden lg:inline-flex items-center pl-2"
                    >
                        {label}
                    </div>
                    <div id="controls" className="flex items-center">
                        {controls}
                    </div>
                    <div
                        id="dummy-3"
                        className="inline-flex md:hidden items-center"
                    ></div>
                    <div
                        id="duration"
                        className="hidden sm:hidden md:inline-flex items-center justify-center pr-6 text-xl"
                    >
                        {duration}
                    </div>
                </div>
            </div>
        </div>
    );
}
