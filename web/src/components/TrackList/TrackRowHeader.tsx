import React from "react";

const listColumns = {
    gridColumn1: "50px",
    gridColumn2: "56px",
    gridColumn3: "1fr",
    gridColumn4: "200px",
    gridColumn5: "70px",
    gridColumn6: "210px",
    rowHeight: "56px",
};

export const listStyles = {
    gridTemplateColumns: `${listColumns.gridColumn1} ${listColumns.gridColumn2} ${listColumns.gridColumn3} ${listColumns.gridColumn4} ${listColumns.gridColumn5} ${listColumns.gridColumn6}`,
    height: `${listColumns.rowHeight}`,
};

export default function TrackRowHeader() {
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
                        <div className="flex items-center pl-2">
                            Title, Artist
                        </div>
                        <div className="flex items-center pl-2">Label</div>
                        <div className="flex items-center">T</div>
                        <div className="flex items-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
