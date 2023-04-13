// src/components/MyComponent.tsx
import React from "react";
import { useGlobalState } from "@/config/global-state";

const MyComponent: React.FC = () => {
    const { isTrue, setIsTrue } = useGlobalState();

    const toggleIsTrue = () => {
        setIsTrue(!isTrue);
    };

    return (
        <div>
            <p>isTrue: {isTrue ? "True" : "False"}</p>
            <button onClick={toggleIsTrue}>Toggle isTrue</button>
        </div>
    );
};

export default MyComponent;
