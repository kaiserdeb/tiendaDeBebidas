import { createContext, useState } from 'react'

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            setCarrito(
                carrito.map((e) => {
                    if(e.id === item.id)
                        e.qty += qty
                    return e;
                })
              );
        }
        else
            setCarrito([...carrito, {...item, qty}]);
    }

    const removeItem = (itemId) => {
        let newCarrito = carrito.filter((e) => e.id !== itemId);
        setCarrito(newCarrito);
    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (itemId) => {
        return carrito.some((e) => e.id === itemId)
    }

    return (
        <CartContext.Provider value={{ carrito, addItem, removeItem, clear, isInCart }}>
            { children }
        </CartContext.Provider>
    )
}