import Cart from "../Cart/Cart";

const getStoredCart = () => {
    const StoredCartString = localStorage.getItem("cart")
    if (StoredCartString) {
        return JSON.parse(StoredCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified)
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id)
    // save to local storage    
    saveCartToLS(cart)
}


const removeFromLS = id => {
    const cart = getStoredCart();
    // removing  everything 
    const remaining = cart.filter(idx=> idx !== id)
    saveCartToLS(remaining)
}
export { addToLS, getStoredCart, removeFromLS }