import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox-next";
import { PaletteTree } from "./palette";
import Navbar from "@/components/NavBar/NavBar";
import TrackImage from "@/components/TrackData/TrackImage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/Navbar">
                <Navbar />
            </ComponentPreview>
            <ComponentPreview path="/TrackImage">
                <TrackImage />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
