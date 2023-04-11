import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image
                src="/images/udm-logo.png"
                alt="UDM"
                width={200}
                height={200}
                className="mr-2"
            />
        </div>
    );
}
