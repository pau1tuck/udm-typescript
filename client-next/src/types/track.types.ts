export interface ITrack {
    id: string;
    trackId: string;
    artist: string;
    title: string;
    version?: string;
    label: string;
    month: number;
    year: number;
    duration: string;
    buyUrl?: string;
    votes: number;
    createdAt: string;
    updatedAt: string;
}

export interface ITracks {
    payload: ITrack[];
}
