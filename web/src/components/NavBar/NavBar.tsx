import React from "react";

export default function Navbar(): JSX.Element {
    return (
        <div className="flex items-center justify-between flex-wrap lg:p-4 sm:p-0 xl:pr-6 sm:pr-5 mb-5">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow"></div>
                {/*
                <div className="flex justify-end font-body text-lg font-medium">
                    <button className="inline-block px-4 py-2 leading-none text-lg text-gray-200 hover:text-white mt-4 lg:mt-0 mr-2">
                        Log In
                    </button>
                    <button className="inline-block px-4 py-2 leading-none rounded bg-blue-700 text-lg text-white text-blue hover:bg-blue-800 mt-4 lg:mt-0">
                        Sign Up
                    </button>
                </div>
                */}
            </div>
        </div>
    );
}
