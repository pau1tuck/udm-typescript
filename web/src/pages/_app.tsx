import "@fontsource/quicksand/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/lato/400.css";
import "@fontsource/architects-daughter/400.css";
import "@/styles/globals.css";
import React from "react";
import { useServerState } from "@state-less/react-client";
import client from "@/config/react-server-client";
import type { AppProps } from "next/app";
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { GlobalStateProvider } from "@/config/global-state-context";
import ViewModeProvider from "@/utils/ViewModeProvider";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Navbar from "@/components/NavBar/NavBar";
import { ComponentPreviews, useInitial } from "@/components/dev";

console.log("React version ass:", React.version);

const server = process.env.NEXT_PUBLIC_SERVER;

export default function App({ Component, pageProps }: AppProps) {
    /* const [count, setCount] = useServerState(0, {
        key: "count",
        scope: "global",
        client,
    }); */
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
