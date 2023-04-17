import React, { useEffect, useState } from "react";
import { ITrackData } from "@/types/Track.interface";
import Image from "next/image";

interface ITrackImageProps extends ITrackData {
    width: number;
    height: number;
}

export default function TrackImageBak({ trackId, width, height }: ITrackImageProps) {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const [imageUrl, setImageUrl] = useState<string>();

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=${trackId}&key=${YOUTUBE_API_KEY}&part=snippet&fields=items(id%2Csnippet(thumbnails))`,
                );
                const data = await response.json();
                const youTubeVideo = data.items[0];
                const imageUrl = youTubeVideo.snippet.thumbnails.medium.url;
                setImageUrl(imageUrl);
            } catch (error) {
                console.error(error);
            }
        };

        if (YOUTUBE_API_KEY) {
            fetchImage().then(() => {
            });
        }

    }, [trackId, YOUTUBE_API_KEY]);
    console.log("YouTube API: ", YOUTUBE_API_KEY);
    console.log(imageUrl);
    return (
        <>
            {imageUrl && <Image src={imageUrl} alt="Video thumbnail" width={width} height={height} />}
        </>
    );
}