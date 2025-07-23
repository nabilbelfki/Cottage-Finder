import React from "react";
import styles from "./Timestamp.module.css";

interface TimestampProps {
    timestamp: string;
    margin: boolean;
}

const Timestamp: React.FC<TimestampProps> = ({timestamp, margin}) => {
    return (
        <div className={`${styles.timestamp} ${margin ? styles.margin : ''}`}>
            {timestamp}
        </div>
    );
}

export default Timestamp;