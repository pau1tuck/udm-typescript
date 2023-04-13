import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "@/dummyData";
import TrackBox from "@/components/TrackGrid/TrackBox";

interface ITrack {
    id: string;
    trackId: string;
    artist: string;
    title: string;
    version: string;
    label: string;
    month: number;
    year: number;
    buyUrl: string;
    votes: number;
    createdAt: string;
    updatedAt: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let tracks: any;
    if (data) {
        tracks = data.map((track: ITrack, key: number) => <TrackBox />);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-wrap justify-center">
                <TrackBox />
                <TrackBox />
                <TrackBox />
                <TrackBox />
            </div>
        </main>
    );
}
