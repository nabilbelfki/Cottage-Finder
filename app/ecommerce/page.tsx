
import React from "react";
import styles from "./Home.module.css";
import TopBar from "@/components/TopBar/TobBar";
import Products from "@/components/Products/Products";
import Cart from "@/components/Cart/Cart";
import Avatar from "@/components/Avatar/Avatar";

export default function Home() {


  return (
    <div className={styles.screen}>
        <TopBar />
        <div className={styles.header}>
            <Avatar />
            <div className={styles.title}>TIESTÖ</div>
            <Cart products={[]}/>
        </div>
        <Products />
    </div>
  );
}
