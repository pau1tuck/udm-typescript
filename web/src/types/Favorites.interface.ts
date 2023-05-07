import { ITrackDataProps } from "@/types/Track.interface";

export interface IFavorites {
    userId?: string;
    favoriteTracks?: ITrackDataProps["trackId"][];
}
