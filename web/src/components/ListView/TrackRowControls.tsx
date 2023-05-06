import React from "react";
import { ITrackControlsProps } from "@/types/TrackControls.interface";
import BuyTrack from "@/components/TrackData/TrackControls/BuyTrack";

const TrackControls: React.FC<ITrackControlsProps> = ({
    trackId,
    upVotes,
    favoriteTracks,
    buyUrl,
}) => {
    return (
        <>
            <BuyTrack buyUrl={buyUrl} />
        </>
    );
};

export default TrackControls;
