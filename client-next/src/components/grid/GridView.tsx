import { data } from "@/dummyData";
import { TrackBox } from "./TrackBox";

export const GridView = () => {
    const tracks = data;
    const trackBox = tracks.map((track, index) => {
        return <TrackBox track={track} key={index} />;
    });
    return <div className="">{trackBox}</div>;
};
