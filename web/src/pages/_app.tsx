import "@fontsource/quicksand/400.css";
import "@fontsource/montserrat/400.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-custom min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}
