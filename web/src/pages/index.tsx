import { Inter } from "next/font/google";
import Wrapper from "@/pages/_wrapper";
import { data } from "@/dummyData";
import { ITrack } from "@/types/Track.interface";
import { ViewMode } from "@/types/ViewMode.enum";
import { useViewMode } from "@/utils/ViewModeProvider";
import Slogan from "@/components/Slogan";
import ViewModeButton from "@/components/ViewModeButton";
import TrackBox from "@/components/GridView/TrackBox";
import TrackRowHeader from "@/components/ListView/TrackRowHeader";
import TrackRow from "@/components/ListView/TrackRow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let nowPlaying = "dogshit.mp3";
    const viewMode = useViewMode();
    let trackData: JSX.Element[] | null = null;

    if (data) {
        trackData = data.map((track: ITrack, key: number) => {
            return viewMode == ViewMode.GRID ? (
                <TrackBox track={track} index={key + 1} key={key} />
            ) : (
                <TrackRow track={track} index={key + 1} key={key} />
            );
        });
    }

    return (
        <Wrapper audioSrc={nowPlaying}>
            <main className="flex min-h-screen flex-col">
                {viewMode == ViewMode.GRID ? (
                    <>
                        <div className="flex sm:justify-between justify-end items-center lg:ml-[70px] sm:px-4 px-1 pt-3 pb-4">
                            <div className="sm:block hidden mr-auto">
                                <Slogan />
                            </div>
                            <div className="lg:mr-[65px] text-white">
                                <ViewModeButton />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {trackData}
                        </div>
                    </>
                ) : (
                    <div className="pt-1">
                        <div className="flex justify-between">
                            <div className="ml-3 pt-3">
                                <Slogan />
                            </div>
                            <div className="flex items-center">
                                <div className="flex justify-end mr-2 pb-4 text-white">
                                    <ViewModeButton />
                                </div>
                            </div>
                        </div>
                        <TrackRowHeader />
                        {trackData}
                    </div>
                )}
            </main>
        </Wrapper>
    );
}
