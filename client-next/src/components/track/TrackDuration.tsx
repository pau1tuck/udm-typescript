import { ITrackDataProps } from "@/types/track.types";

export const TrackVersion = ({ duration }: ITrackDataProps) => {
    return <span>{duration}</span>;
};
