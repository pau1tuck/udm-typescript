import React from "react";
import Link from "next/link";
import { ITrackControlsProps } from "@/types/TrackControls.interface";
import { FaShoppingCart } from "react-icons/fa";

const TrackControls: React.FC<ITrackControlsProps> = ({ buyUrl }) => {
    return (
        <span className="text-gray-400">
            <Link href={`https://${buyUrl}`} target="_blank">
                <FaShoppingCart />
            </Link>
        </span>
    );
};

export default TrackControls;
