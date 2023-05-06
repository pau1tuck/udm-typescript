import { ITrackDataProps } from "@/types/Track.interface";
import { IFavorites } from "@/types/Favorites.interface";

export interface ITrackControlsProps {
    trackId?: ITrackDataProps["trackId"];
    upVotes?: number;
    favoriteTracks?: IFavorites["favoriteTracks"];
    buyUrl?: ITrackDataProps["buyUrl"];
}
