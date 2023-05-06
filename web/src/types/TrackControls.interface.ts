import { ITrackData } from "@/types/Track.interface";
import { IFavorites } from "@/types/Favorites.interface";

export interface ITrackControlsProps {
    trackId: ITrackData["trackId"];
    buyUrl: ITrackData["buyUrl"];
    upVotes: number;
    favoriteTracks: IFavorites["favoriteTracks"];
}
