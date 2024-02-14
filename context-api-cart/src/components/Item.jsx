import { useCart } from "../context/Cart";

const Item = (props) => {
//    const cart = useContext(CartContext);
//    console.log("Cart", cart);

    const cart = useCart();

   return (
    <div>
        <h1>{props.name}</h1>
        <p>Price:- ${props.price}</p>
        <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to Cart</button>
    </div>
   )
}

export default Item;