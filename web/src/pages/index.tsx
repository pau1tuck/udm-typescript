import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import { ITrack } from "@/types/Track.interface";
import ViewModeButton from "@/components/ViewModeButton";
import TrackBox from "@/components/GridView/TrackBox";
import TrackRowHeader from "@/components/ListView/TrackRowHeader";
import TrackRowData from "@/components/ListView/TrackRowData";

const inter = Inter({ subsets: ["latin"] });

enum ViewMode {
    grid = "grid",
    list = "list",
}

let viewMode = ViewMode.grid;

export default function Home() {
    let trackData: JSX.Element[] | null = null;
    if (data) {
        trackData = data.map((track: ITrack, key: number) => (
            <>
                {viewMode != ViewMode.grid ? (
                    <TrackBox track={track} index={key + 1} key={key} />
                ) : (
                    <TrackRowData track={track} index={key + 1} key={key} />
                )}
            </>
        ));
    }

    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex justify-end text-white">
                {" "}
                <ViewModeButton />
            </div>
            <TrackRowHeader />
            {trackData}
            {/*<div className="flex flex-wrap justify-center">{trackData}</div>*/}
        </main>
    );
}
