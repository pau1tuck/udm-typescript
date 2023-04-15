export interface ITrack {
    id?: string;
    trackId?: string;
    artist?: string;
    title?: string;
    version?: string;
    label?: string;
    month?: number;
    year?: number;
    buyUrl?: string;
    votes?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ITrackData {
    artist?: string;
    title?: string;
    version?: string;
    label?: string;
    month?: number;
}

export interface ITracks {
    payload: ITrack[];
}
