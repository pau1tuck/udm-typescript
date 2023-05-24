import { ITrackDataProps } from "@/types/track.types";
import { TrackImage } from "@/components/track/TrackImage";

export const TrackBoxImage = ({ trackId }: ITrackDataProps) => {
    return (
        <div className="w-60 h-32 mt-2 bg-black rounded-md cursor-pointer">
            <TrackImage trackId={trackId} width={320} height={180} />
        </div>
    );
};
