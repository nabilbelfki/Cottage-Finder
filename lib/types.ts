export type Product = {
    price: {
        amount: number;
        currency: string;
    },
    freeShipping: boolean;
    available: boolean;
    description: string;
    photos: string[];
    expanded?: boolean;
    onClick?: () => void;
    onBackClick?: () => void;
}