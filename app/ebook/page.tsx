import React from "react";
import styles from "./Home.module.css"
import { pages } from "./constants"
import Book from "../../components/Book/Book";

export default function Home() {
  return (
    <Book pages={pages} />
  );
}
