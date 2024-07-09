import React, { createContext, useState, ReactNode } from "react";

interface ICartContextProps {
    children: ReactNode;
}

interface ICartContextValue {
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const defaultContext: ICartContextValue = {
    cartItems: [],
    setCartItems: () => []
}

export const MyContext = createContext<ICartContextValue>(defaultContext);

const CartContext: React.FC<ICartContextProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    return (
        <MyContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </MyContext.Provider>
    );
}

export default CartContext;
