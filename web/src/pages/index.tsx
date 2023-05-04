import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import { ITrack } from "@/types/Track.interface";
import { ViewMode } from "@/types/ViewMode.enum";
import { useViewMode, useViewModeContext } from "@/utils/ViewModeProvider";
import ViewModeButton from "@/components/ViewModeButton";
import TrackBox from "@/components/GridView/TrackBox";
import TrackRowHeader from "@/components/ListView/TrackRowHeader";
import TrackRow from "@/components/ListView/TrackRow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const viewMode = useViewMode();
    let trackData: JSX.Element[] | null = null;
    if (data) {
        trackData = data.map((track: ITrack, key: number) => (
            <>
                {viewMode == ViewMode.GRID ? (
                    <TrackBox track={track} index={key + 1} key={key} />
                ) : (
                    <TrackRow track={track} index={key + 1} key={key} />
                )}
            </>
        ));
    }

    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex justify-end pr-4 pb-4 text-white">
                <ViewModeButton />
            </div>
            {viewMode == ViewMode.GRID ? (
                <div className="flex flex-wrap justify-center">{trackData}</div>
            ) : (
                <div className="pt-1">
                    <TrackRowHeader />
                    {trackData}
                </div>
            )}
        </main>
    );
}
