import Image from "next/image";
import { Inter } from "next/font/google";
import TrackBox from "@/components/TrackBox/TrackBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
