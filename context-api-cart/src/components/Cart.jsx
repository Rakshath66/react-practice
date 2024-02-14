import {useCart } from "../context/Cart";

const Cart = () => {
    //accessing items in context
//    const cart = useContext(CartContext);
   const cart = useCart();

   const totalBill = cart.items.reduce((a, b) => a+b.price, 0)
   console.log(totalBill)

   return (
    <div className="cart">
        <h1>Cart</h1>
        {cart && cart.items.map((item) => (
        <li>{item.name} - {item.price}</li>
        ))}

        <h5>Total Bill:- ${totalBill}</h5>
    </div>
   )
}

export default Cart;