import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import { ITrack } from "@/types/Track.interface";
import ViewModeButton from "@/components/ViewModeButton";
import TrackBox from "@/components/TrackGrid/TrackBox";
import TrackRow from "@/components/TrackList/TrackRow";

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
                {viewMode == ViewMode.grid ? (
                    <TrackBox track={track} key={key} />
                ) : null}
            </>
        ));
    }

    return (
        <main className="flex min-h-screen flex-col justify-between">
            <ViewModeButton />
            <TrackRow />
            <div className="flex flex-wrap justify-center">{trackData}</div>
        </main>
    );
}
