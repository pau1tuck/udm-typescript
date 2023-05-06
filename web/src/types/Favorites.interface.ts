import { ITrackData } from "@/types/Track.interface";

export interface IFavorites {
    userId?: string;
    favoriteTracks?: ITrackData["trackId"][];
}
