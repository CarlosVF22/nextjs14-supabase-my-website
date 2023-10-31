"use client";
// RotateText.tsx
import React, { useState, useEffect } from "react";
import { animated, useTransition } from "@react-spring/web";

type Props = {
    texts: string[];
    duration?: number;
};

const RotateText: React.FC<Props> = ({ texts, duration = 2000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, duration);

        return () => clearInterval(interval);
    }, [texts, duration]);

    const transitions = useTransition(texts[index], {
        from: { opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-100%)" },
        config: { duration: duration / 2 },
        keys: (item) => item,
    });

    return (
        <p
            style={{
                position: "relative",
                height: "1.5em",
                overflow: "hidden",
            }}
        >
            {transitions((props, item) => (
                <animated.span
                    style={{
                        ...props,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    {item}
                </animated.span>
            ))}
        </p>
    );
};

export default RotateText;
