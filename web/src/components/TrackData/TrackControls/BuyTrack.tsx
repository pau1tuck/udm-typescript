import React from "react";
import Link from "next/link";
import { ITrackData } from "@/types/Track.interface";
import { FaShoppingCart } from "react-icons/fa";

const TrackControls: React.FC<ITrackData> = ({ buyUrl }) => {
    return (
        <span className="text-gray-400">
            <Link href={`https://${buyId}`} target="_blank">
                <FaShoppingCart />
            </Link>
        </span>
    );
};

export default TrackControls;
