"use client"
import styles from "./Home.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.screen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="203" height="111" viewBox="0 0 203 111" fill="none">
        <path fillRule="evenodd" clip-rule="evenodd" d="M39.4144 110.122H0L62.1076 0H93.4003L94.8335 39.8922H96.2668L118.96 0.238875H178.679C207.822 -0.477751 214.51 39.1756 173.185 54.2247C198.505 59.7189 191.339 103.433 146.192 109.644H64.7352L63.302 69.5128H62.1076L39.4144 110.122ZM155.985 43.2365H136.875L148.341 22.9321H158.852C169.123 22.6932 176.29 36.3091 155.985 43.2365ZM139.503 84.562H113.465L127.081 60.6744H146.908C158.135 60.4355 159.807 79.7845 139.503 84.562Z" fill="white"/>
      </svg>
    </div>
  );
}