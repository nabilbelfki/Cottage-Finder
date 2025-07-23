import React from "react";
import styles from "./Page.module.css"
interface PageProps {
    text: string;
    page: number;
    chapter?: string;
    title?: string;
}

const Page: React.FC<PageProps> = ({text, page, chapter = '', title}) => {
    return (
        <div className={styles.page}>
            {chapter !== '' && (
                <div className={styles.chapter}>Chapter {chapter}</div>
            )}
            {title !== '' && (
                <div className={styles.title}>{title}</div>
            )}
            <div className={styles.text}>{text}</div>
            <div className={styles[`page-number`]}>{page}</div>
        </div>
    );
};

export default Page;