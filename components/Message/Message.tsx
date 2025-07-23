import React from "react";
import styles from "./Message.module.css";

interface MessageProps {
    message: string;
    sentFromYou: boolean;
}

const Message: React.FC<MessageProps> = ({message, sentFromYou}) => {
    return (
        <div className={`${styles.container} ${sentFromYou ? styles.sent : styles.received}`}>
            <div className={styles.message}>
                {message}
            </div>
        </div>
    );
}

export default Message;