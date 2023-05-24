import { getTrackData } from "@/utils/get-track-data";
import { TrackBox } from "./TrackBox";

export const GridView = (filter: string, sortBy: string) => {
    const tracks = getTrackData(filter, sortBy);
    const trackBox = tracks.map((track, index) => {
        return (
            <div key={index}>
                <TrackBox track={track} />
            </div>
        );
    });
    return <div className="">{trackBox}</div>;
};
