import "@fontsource/quicksand/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/lato/400.css";
import "@fontsource/architects-daughter/400.css";
import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { GlobalStateProvider } from "@/config/global-state-context";
import ViewModeProvider from "@/utils/ViewModeProvider";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Navbar from "@/components/NavBar/NavBar";

console.log("React version:", React.version);

import { ComponentPreviews, useInitial } from "@/components/dev";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalStateProvider>
            <ViewModeProvider>
                <div className="bg-custom min-h-screen">
                    <div>
                        <Navbar />
                    </div>
                    <div className="max-w-screen-xl mx-auto mt-[-2rem] px-4">
                        <header className="flex flex-col items-center justify-center mb-10">
                            <div>
                                <Logo />
                            </div>
                            <div>
                                <Title />
                            </div>
                        </header>
                        <DevSupport
                            ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                        >
                            <Component {...pageProps} />
                        </DevSupport>
                    </div>
                </div>
            </ViewModeProvider>
        </GlobalStateProvider>
    );
}
