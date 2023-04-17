import React, { useState } from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";

interface ITrackImageProps extends ITrackData {
    width: number;
    height: number;
}

export default function TrackImage({ trackId, width, height }: ITrackImageProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    // const imageUrl = getServerSideTrackImageProps(trackId);

    if (imageUrl) {
        return (<Image src={imageUrl} alt="Video thumbnail" width={320} height={180} />);
    }
}