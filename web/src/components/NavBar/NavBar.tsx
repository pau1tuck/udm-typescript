import React, { useEffect } from "react";
import NavBarLogo from "@/components/NavBar/NavBarLogo";

export default function Navbar(): JSX.Element {
    const handleScroll = (): void => {
        const navBarLogo = document.querySelector(
            ".navbar-logo"
        ) as HTMLDivElement;
        if (window.pageYOffset > 100) {
            navBarLogo.style.display = "block";
        } else {
            navBarLogo.style.display = "none";
        }
    };
    useEffect((): void => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    // Remove the event listener when the component is unmounted to prevent memory leaks
    useEffect(() => {
        const handleScroll = (): void => {};
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span
                    className="navbar-logo font-semibold text-xl tracking-tight"
                    style={{ display: "none" }}
                >
                    <NavBarLogo />
                </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">.</div>
                <div className="flex justify-end">
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                        Log In
                    </button>
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded bg-blue text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}
