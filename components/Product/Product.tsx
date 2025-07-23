"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Product.module.css";
import { Product as ProductProps } from "../../lib/types"

const Product: React.FC<ProductProps> = ({description, freeShipping, available, price, photos, expanded, onClick, onBackClick}) => {
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type: '-' | '+') => {
        if (type === '-' && quantity > 1) {
        setQuantity(prev => prev - 1);
        } else if (type === '+' && quantity < 9) {
        setQuantity(prev => prev + 1);
        }
    };

    const minusFillColor = quantity === 1 ? '#D0D0D0': '#6D6D6D';
    const plusFillColor = quantity === 9 ? '#D0D0D0': '#6D6D6D';

    const minusCursor = quantity === 1 ? 'not-allowed': 'pointer';
    const plusCursor = quantity === 9 ? 'not-allowed': 'pointer';

    return (
        <div className={`${styles.product} ${expanded ? styles.expanded : ''}`} onClick={!expanded ? onClick : undefined}>
            <div className={styles.display}>
                {expanded && 
                (<div 
                    className={styles.back} 
                    onClick={(e) => {
                        e.stopPropagation();
                        onBackClick?.();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <rect x="1.06055" y="6.0119" width="1" height="7" rx="0.2" transform="rotate(-45 1.06055 6.0119)" fill="#272727"/>
                        <rect x="1.70508" y="6.65686" width="1" height="7" rx="0.2" transform="rotate(-135 1.70508 6.65686)" fill="#272727"/>
                    </svg>
                </div>)}
                <div className={styles.photo}>
                    {photos.map((photo, index) => 
                        <Image key={index} src={photo} alt="Photo of Purse" width={200} height={150}/>
                    )}

                </div>
            </div>
            {expanded && (<div className={styles.details}>
                <div className={styles.price}>{price.currency + price.amount}</div>
                <div className={styles[`shipping-and-availability`]}>
                    <div className={styles.shipping}>
                        <div className={styles[`shipping-icon`]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 12 8" fill="none">
                                <path d="M11.9147 0.0679951L11.9921 0.135976L11.9991 3.1928C12.0015 4.87358 11.9991 6.27306 11.9921 6.30119C11.9851 6.33166 11.9499 6.38324 11.9171 6.41371C11.8585 6.46763 11.8467 6.46997 11.4717 6.46997C10.97 6.46997 10.956 6.46294 10.8903 6.16991C10.7473 5.5323 10.2105 5.11034 9.54241 5.11034C8.87901 5.11034 8.33516 5.53933 8.1945 6.17695C8.16637 6.2965 8.1359 6.36917 8.09605 6.41137L8.0351 6.46997H6.43168H4.82591L4.75793 6.40199L4.68994 6.33401V3.24202C4.68994 0.349298 4.69463 0.150042 4.73214 0.103158C4.75324 0.0750276 4.79543 0.0398648 4.82356 0.0257997C4.86107 0.00704618 5.8386 1.36197e-05 8.35625 1.36197e-05H11.8397L11.9147 0.0679951Z" fill="#909090"/>
                                <path d="M4.02614 1.32917C4.05427 1.33386 4.10584 1.37136 4.13866 1.40887L4.19727 1.48154V3.90309V6.32463L4.1246 6.3973C4.05427 6.46763 4.04724 6.46997 3.83392 6.46997C3.54558 6.46997 3.51042 6.44418 3.44713 6.16991C3.34164 5.72217 3.10956 5.42681 2.72512 5.24865C2.20236 5.00485 1.56709 5.08924 1.16858 5.45728C0.936501 5.67295 0.791161 5.93784 0.739589 6.24493C0.730212 6.29884 0.697394 6.36448 0.657542 6.40433C0.594249 6.46763 0.582528 6.46997 0.371551 6.46997C0.139477 6.46997 0.0832164 6.44653 0.0269559 6.33635C-0.0082069 6.26837 -0.0105511 3.86089 0.0246117 3.7976C0.0855606 3.68508 2.02889 1.39012 2.09453 1.35261C2.16251 1.31745 2.25159 1.31276 3.07206 1.3151C3.56902 1.31745 3.99801 1.32448 4.02614 1.32917ZM2.30316 1.84254C2.268 1.86364 2.05937 2.09572 1.84136 2.36061C1.17326 3.16467 1.19671 3.13185 1.19671 3.23734C1.19671 3.31001 1.21311 3.34751 1.26469 3.40143L1.33267 3.46941H2.4485H3.56433L3.63935 3.40143L3.71671 3.33345V2.63722V1.941L3.63935 1.87302L3.56433 1.80504H2.96422C2.45319 1.80504 2.35473 1.80973 2.30316 1.84254Z" fill="#909090"/>
                                <path d="M9.7393 5.58152C9.91043 5.60965 10.1355 5.7339 10.2667 5.8722C10.4637 6.08083 10.5527 6.29884 10.5527 6.57546C10.5527 7.08649 10.2081 7.48969 9.69476 7.57877C9.30328 7.64441 8.86257 7.43343 8.66566 7.08649C8.56017 6.9013 8.52736 6.76299 8.53908 6.52857C8.54611 6.33635 8.55783 6.29181 8.63519 6.1371C8.77584 5.8511 9.02198 5.65419 9.32204 5.5909C9.50019 5.55339 9.56583 5.55105 9.7393 5.58152ZM9.39002 6.32932C9.28922 6.39027 9.22827 6.5192 9.24937 6.62469C9.2564 6.67157 9.29859 6.73955 9.34548 6.78644C9.4158 6.85676 9.44159 6.86848 9.54239 6.86848C9.6385 6.86848 9.66898 6.85676 9.73696 6.79112C9.99716 6.54733 9.69242 6.14178 9.39002 6.32932Z" fill="#909090"/>
                                <path d="M2.29638 5.58151C2.47689 5.61668 2.69255 5.73389 2.82148 5.8675C3.28094 6.33869 3.18483 7.11227 2.62457 7.44749C2.00805 7.81552 1.22743 7.44983 1.10085 6.73251C1.02583 6.31524 1.26963 5.84875 1.65642 5.66825C1.87209 5.56745 2.08306 5.53932 2.29638 5.58151ZM1.9682 6.31759C1.87443 6.36682 1.80645 6.48403 1.80645 6.59655C1.80645 6.66922 1.82286 6.70204 1.89787 6.77705C1.97523 6.85441 2.00336 6.86847 2.08775 6.86847C2.2706 6.86847 2.39249 6.74657 2.39249 6.56373C2.39249 6.47934 2.37843 6.45121 2.30107 6.37385C2.19793 6.2707 2.09478 6.2543 1.9682 6.31759Z" fill="#909090"/>
                            </svg>
                        </div>
                        <div className={styles[`shipping-label`]}>{freeShipping ? 'Free Shipping' : 'No Shipping'}</div>
                    </div>
                    <div className={styles.availability}>
                        <div className={styles[`availability-icon`]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 7 9" fill="none">
                                <path d="M2.71249 0.0175393C2.02772 0.106157 1.39611 0.415516 0.906294 0.90211C0.411643 1.39515 0.105508 2.02998 0.0217233 2.73248C-0.0217801 3.10145 -0.000834023 3.43015 0.0926179 3.82007C0.36814 4.96082 1.2656 6.37872 2.6271 7.824C2.97835 8.19619 3.02991 8.24292 3.09275 8.24292C3.15397 8.24292 3.24904 8.1543 3.62285 7.75149C5.12291 6.13381 6.00587 4.63213 6.16055 3.43659C6.27817 2.52624 5.94464 1.574 5.27437 0.90211C4.81355 0.441295 4.24801 0.149661 3.58256 0.0336517C3.37794 -0.00340687 2.93162 -0.0114631 2.71249 0.0175393ZM3.43755 1.71418C3.96121 1.85758 4.33018 2.22977 4.47036 2.75826C4.51386 2.92422 4.51225 3.26097 4.46552 3.43337C4.37046 3.78301 4.15778 4.0827 3.87098 4.26799C2.95257 4.86254 1.74897 4.25832 1.67808 3.16912C1.6523 2.76954 1.80214 2.37962 2.09217 2.08798C2.30485 1.87691 2.54654 1.74801 2.84139 1.69162C2.99285 1.66262 3.28932 1.67389 3.43755 1.71418Z" fill="#909090"/>
                            </svg>
                        </div>
                        <div className={styles[`availability-label`]}>{available ? 'Available in Store' : 'Not Available in Store'}</div>
                    </div>
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.quantity}>
                    <button 
                    className={styles.minus} 
                    onClick={() => updateQuantity('-')}
                    aria-label="Decrease quantity"
                    style={{cursor: minusCursor}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="3.5" viewBox="0 0 10 2" fill="none">
                            <rect x="10" y="1.5" width="10" height="1" rx="0.3" transform="rotate(-180 10 1.5)" fill={minusFillColor}/>
                        </svg>
                    </button>
                    <div className={styles.amount}>{quantity}</div>
                    <button 
                    className={styles.plus} 
                    onClick={() => updateQuantity('+')}
                    aria-label="Increase quantity"
                    style={{cursor: plusCursor}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="20" viewBox="0 0 11 10" fill="none">
                            <rect x="6" width="10" height="1" rx="0.3" transform="rotate(90 6 0)" fill={plusFillColor}/>
                            <rect x="10.5" y="5.5" width="10" height="1" rx="0.3" transform="rotate(-180 10.5 5.5)" fill={plusFillColor}/>
                        </svg>
                    </button>
                </div>
                <div className={styles['add-to-cart']}>Add to Cart</div>
            </div>)}
        </div>
    );
};

export default Product;