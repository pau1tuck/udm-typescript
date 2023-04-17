import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ITrackData } from "@/types/Track.interface";
import getServerSideTrackImageProps from "@/components/Track/getServerSideTrackImageProps";

interface ITrackImageProps extends ITrackData {
    width: number;
    height: number;
}

export default function TrackImage({ trackId, width, height }: ITrackImageProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTrackImage() {
            try {
                const { props } = await getServerSideTrackImageProps(trackId);
                setImageUrl(props.imageUrl);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTrackImage().catch(error => {
            console.error("An error occurred while fetching the track image:", error);
        });
    }, [trackId]);

    if (imageUrl) {
        return <Image src={imageUrl} alt="Video thumbnail" width={width} height={height} />;
    } else {
        return null;
    }
}