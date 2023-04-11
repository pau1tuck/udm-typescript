import React from "react";
import Image from "next/image";

export default function Title() {
    return (
        <div className="flex items-center pl-3">
            <div className="inline-block relative animate-flashing">
                <Image
                    src="/images/udm-title.png"
                    alt="Underground Dance Music"
                    width={350}
                    height={100}
                    className="mr-2"
                />
            </div>
        </div>
    );
}
