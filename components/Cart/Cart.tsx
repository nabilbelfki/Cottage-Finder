import { Product } from "../../lib/types"
import styles from "./Cart.module.css"

interface CartProps {
    products: Product[];
}

const Cart: React.FC<CartProps>  = ({ products }) => {
    return (
        <div className={styles.cart}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="auto" height="40px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M2435 4739 c-502 -63 -885 -475 -885 -954 l0 -103 -187 -4 c-179 -3 -191 -4 -245 -30 -116 -54 -197 -158 -218 -278 -17 -102 -192 -2609 -186 -2669 12 -122 114 -255 234 -303 l57 -23 1555 0 1555 0 57 23 c120 48 222 181 234 303 6 60 -169 2566 -186 2668 -6 35 -20 82 -32 104 -33 67 -112 141 -181 173 -60 28 -68 29 -249 32 l-188 4 0 81 c-1 242 -110 497 -290 678 -172 173 -368 269 -610 299 -96 11 -135 11 -235 -1z m300 -335 c291 -74 515 -357 515 -651 l0 -73 -690 0 -690 0 0 73 c0 41 9 108 19 149 96 374 472 597 846 502z"/>
                </g>
            </svg>
            {products.length > 0 && (
                <div className={styles.quantity}>
                {products.length}
            </div>)}
        </div>
    );
}

export default Cart;