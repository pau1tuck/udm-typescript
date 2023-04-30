import React from "react";
import { BiTime } from "react-icons/bi";

const listColumns = {
    /*
    gridColumn1: "50px",
    gridColumn2: "128px",
    gridColumn3: "250",
    gridColumn4: "1fr",
    gridColumn5: "125px",
    gridColumn6: "30px",
    */
    rowHeight: "72px",
};

export const listStyles = {
    /*
    gridTemplateColumns: `${listColumns.gridColumn1} ${listColumns.gridColumn2} ${listColumns.gridColumn3} ${listColumns.gridColumn4} ${listColumns.gridColumn5} ${listColumns.gridColumn6}`,*/
    height: `${listColumns.rowHeight}`,
};

export default function TrackRowHeader({
    children,
}: React.PropsWithChildren<{}>) {
    return (
        <div className="w-full">
            <div className="max-w-1280 mx-auto w-full">
                <div
                    className="grid gap-0 w-full bg-darkGray text-gray-500"
                    style={{ gridTemplateRows: "auto auto" }}
                >
                    <div
                        className="grid gap-0 w-full grid-cols-[30px,5px,225px,5px,150px,5px] sm:grid-cols-[50px,5px,minmax(300px,1fr),5px,175px,5px] md:grid-cols-[50px,128px,minmax(300px,1fr),5px,200px,75px] lg:grid-cols-[50px,128px,1fr,200px,210px,75px] whitespace-nowrap"
                        style={listStyles}
                    >
                        <div className="flex items-center justify-center">
                            #
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
