import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import { ITrack } from "@/types/Track.interface";
import TrackBox from "@/components/TrackBoxes/TrackBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let trackBox = null;
    if (data) {
        trackBox = data.map((track: ITrack, key: number) => (
            <TrackBox track={track} key={key} />
        ));
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-wrap justify-center">{trackBox}</div>
        </main>
    );
}
