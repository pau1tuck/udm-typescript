import React from "react";
import { BiTime } from "react-icons/bi";

const listColumns = {
    gridColumn1: "50px",
    gridColumn2: "128px",
    gridColumn3: "1fr",
    gridColumn4: "200px",
    gridColumn5: "210px",
    gridColumn6: "70px",
    rowHeight: "72px",
};

export const listStyles = {
    gridTemplateColumns: `${listColumns.gridColumn1} ${listColumns.gridColumn2} ${listColumns.gridColumn3} ${listColumns.gridColumn4} ${listColumns.gridColumn5} ${listColumns.gridColumn6}`,
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
                    <div className="grid gap-0 w-full " style={listStyles}>
                        <div className="flex items-center justify-center">
                            #
                        </div>
                        <div className="flex items-center"> </div>
                        <div className="flex items-center pl-6">
                            Title, Artist
                        </div>
                        <div className="flex items-center pl-2">Label</div>
                        <div className="flex items-center"></div>
                        <div className="flex items-center justify-center text-xl">
                            <BiTime />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}