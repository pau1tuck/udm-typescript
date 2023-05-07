import React from "react";
import { MdNumbers } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { listColumns, style } from "@/components/ListView/TrackRow";

export default function TrackRowHeader() {
    return (
        <div className="w-full">
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
                            <MdNumbers />
                        </div>
                        <div
                            id="image"
                            className="hidden sm:inline-flex items-center"
                        ></div>
                        <div
                            id="dummy-1"
                            className="inline-flex sm:hidden items-center"
                        ></div>
                        <div
                            id="title-artist"
                            className="inline-flex items-center sm:pl-2 md:pl-10"
                        >
                            Title, Artist
                        </div>
                        <div
                            id="dummy-2"
                            className="inline-flex lg:hidden items-center"
                        ></div>
                        <div
                            id="label"
                            className="hidden lg:inline-flex items-center pl-2"
                        >
                            Label
                        </div>
                        <div id="controls" className="flex items-center"></div>
                        <div
                            id="dummy-3"
                            className="inline-flex md:hidden items-center"
                        ></div>
                        <div
                            id="duration"
                            className="hidden sm:hidden md:inline-flex items-center justify-center pr-6 text-xl"
                        >
                            <BiTime />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
