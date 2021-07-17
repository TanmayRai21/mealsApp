import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      type: props.type,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.heading}>
          <h3>{props.name}</h3>
          {props.type === "veg" && (
            <span className={classes.veg}>VEG &#9679;</span>
          )}
          {props.type === "non-veg" && (
            <span className={classes.nonveg}>N.VEG &#9679;</span>
          )}
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
