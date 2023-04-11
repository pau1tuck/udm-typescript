import "@fontsource/quicksand/400.css";
import "@fontsource/montserrat/400.css";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-custom min-h-screen">
            <div className="max-w-screen-md mx-auto px-4 py-4">
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
    );
}
