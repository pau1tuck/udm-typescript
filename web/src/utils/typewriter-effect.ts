// @/utils/typewriter-effect.ts
import { useState, useEffect } from "react";

const useTypewriterEffect = (customText: string, trigger: unknown) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setText(""); // Reset text
        setIndex(0); // Reset index
    }, [trigger, customText]);

    useEffect(() => {
        if (index < customText.length) {
            const timer = setTimeout(() => {
                setText((text) => text + customText[index]);
                setIndex((index) => index + 1);
            }, 50); // Change this value to speed up or slow down the typing

            return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
        }
    }, [text, index, customText]); // Add customText to the dependencies array

    return text;
};

export default useTypewriterEffect;
