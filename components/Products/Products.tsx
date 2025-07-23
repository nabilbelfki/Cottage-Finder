"use client"
import React, { useState } from "react";
import styles from "./Products.module.css"
import Product from "@/components/Product/Product"
import { products } from "../../lib/products"

const Products: React.FC = () => {
      const [expandedProductIndex, setExpandedProductIndex] = useState<number | null>(null);

    const handleProductClick = (index: number) => {
        setExpandedProductIndex(index);
    };

    const handleBackClick = () => {
        setExpandedProductIndex(null);
    };

    return (
        <div className={styles.products}>
            {products.map((product, index) => 
                <Product 
                    key={index} 
                    {...product}
                    expanded={expandedProductIndex === index}
                    onClick={() => handleProductClick(index)}
                    onBackClick={handleBackClick}
                />
            )}
        </div>
    );
}

export default Products;