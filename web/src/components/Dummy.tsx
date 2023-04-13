// src/components/MyComponent.tsx
import React from "react";
import { useGlobalState } from "@/config/global-state-context";

const MyComponent: React.FC = () => {
    const { nowPlaying, setNowPlaying } = useGlobalState();

    const toggleNowPlaying = () => {
        setNowPlaying(!nowPlaying);
    };

    return (
        <div>
            <p>nowPlaying: {nowPlaying ? "True" : "False"}</p>
            <button onClick={toggleNowPlaying}>Toggle isTrue</button>
        </div>
    );
};

export default MyComponent;
