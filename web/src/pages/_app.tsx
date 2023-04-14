import "@fontsource/quicksand/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/architects-daughter/400.css";
import "@/styles/globals.css";
import { GlobalStateProvider } from "@/config/global-state-context";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Navbar from "@/components/NavBar/NavBar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalStateProvider>
            <div className="bg-custom min-h-screen">
                <div>
                    <Navbar />
                </div>
                <div className="max-w-screen-xl mx-auto px-4 py-4">
                    <header className="flex flex-col items-center justify-center mb-8">
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <Title />
                        </div>
                    </header>
                    <Component {...pageProps} />
                </div>
            </div>
        </GlobalStateProvider>
    );
}
