import React from "react";
import { MdNumbers } from "react-icons/md";
import { BiTime } from "react-icons/bi";

export const listColumns =
    "grid-cols-[30px,5px,225px,5px,150px,5px] sm:grid-cols-[50px,5px,minmax(300px,1fr),5px,175px,5px] md:grid-cols-[50px,128px,minmax(300px,1fr),5px,200px,75px] lg:grid-cols-[50px,128px,1fr,225px,210px,75px]";

export default function TrackRowHeader({
    children,
}: React.PropsWithChildren<{}>) {
    return (
        <div className="w-full">
            <div className="max-w-1280 mx-auto w-full">
                <div
                    className="grid gap-0 w-full font-body font-bold bg-darkGray text-gray-500"
                    style={{ gridTemplateRows: "auto auto" }}
                >
                    <div
                        className={`grid gap-0 w-full h-[72px] whitespace-nowrap ${listColumns}`}
                    >
                        <div className="flex items-center justify-center md:mr-3 md:ml-3 text-xl">
                            <MdNumbers />
                        </div>
                        <div className="flex items-center"></div>
                        <div className="flex items-center pl-2 sm:pl-2 md:pl-6 ">
                            Title, Artist
                        </div>
                        <div className="inline-flex lg:hidden items-center"></div>
                        <div className="hidden lg:inline-flex items-center pl-2">
                            Label
                        </div>
                        <div className="flex items-center">Controls</div>
                        <div className="inline-flex md:hidden items-center"></div>
                        <div className="hidden sm:hidden md:flex items-center justify-center text-xl">
                            <BiTime />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
