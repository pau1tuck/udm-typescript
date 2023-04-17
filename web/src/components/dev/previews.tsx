import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox-next";
import { PaletteTree } from "./palette";
import Navbar from "@/components/NavBar/NavBar";
import TrackImageBak from "@/components/Track/TrackImageBak";

const ComponentPreviews = () => {
    return <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/Navbar">
            <Navbar />
        </ComponentPreview>
        <ComponentPreview path="/TrackImage">
            <TrackImageBak />
        </ComponentPreview>
    </Previews>;
};

export default ComponentPreviews;
