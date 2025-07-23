"use client"
import React, { useEffect, useState } from "react";
import styles from "./Typing.module.css";

interface TypingProps {
    destroyAfterMs?: number;
}

const Typing: React.FC<TypingProps> = ({ destroyAfterMs }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (destroyAfterMs) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, destroyAfterMs);
            return () => clearTimeout(timer);
        }
    }, [destroyAfterMs]);

    if (!visible) return null;

    return (
        <div className={styles.container}>
            <div className={styles.typing}>
                <div className={styles.indicator}></div>
                <div className={styles.indicator}></div>
                <div className={styles.indicator}></div>
            </div>
        </div>
    );
};

export default Typing;
