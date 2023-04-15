import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import TrackBox from "@/components/TrackGrid/TrackBox";
import { ITrack } from "@/types/Track.interface";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    if (data) {
        const trackBox = data.map((track: ITrack, key: number) => (
            <TrackBox track={track} key={key} />
        ));
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-wrap justify-center"></div>
        </main>
    );
}
