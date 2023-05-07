import React from "react";
import { listColumns, style } from "@/components/ListView/TrackRow";
import { ITrackDataProps } from "@/types/Track.interface";

interface TrackRowDataProps {
    track?: ITrackDataProps;
    number: React.ReactNode;
    image: React.ReactNode;
    titleArtist: React.ReactNode;
    label: React.ReactNode;
    controls: React.ReactNode;
    duration: React.ReactNode;
}

export default function TrackRowData(props: {
    trackRowDataProps: TrackRowDataProps;
}) {
    const { number, image, titleArtist, label, controls, duration } =
        props.trackRowDataProps;

    return (
        <div className="max-w-1280 mx-auto w-full">
            <div
                className="grid gap-0 w-full font-body font-bold bg-darkGray text-gray-500"
                style={style}
            >
                <div
                    className={`grid gap-0 w-full h-[72px] whitespace-nowrap ${listColumns}`}
                >
                    <div
                        id="number"
                        className="inline-flex items-center justify-center md:mr-3 text-xl"
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
                        className="inline-flex items-center sm:pl-2 md:pl-10 text-white"
                    >
                        {titleArtist}
                    </div>
                    <div
                        id="dummy-2"
                        className="inline-flex lg:hidden items-center"
                    ></div>
                    <div
                        id="label"
                        className="hidden lg:inline-flex items-center pl-2 text-secondary"
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
