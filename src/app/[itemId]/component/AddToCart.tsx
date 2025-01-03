'use client'

import { ChangeEvent, FormEvent, memo, useCallback, useState } from "react";
import styles from './AddToCart.module.css';

export default memo(function AddToCart(
  {itemIdx, price}:
  {itemIdx: number, price:number}
){
  const [count, setCount] = useState(1);
  const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setCount(Number((e.target as HTMLInputElement).value));
  }, [])
  const handleAddToCart = useCallback((e:FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(itemIdx, form.count.value);
  },[itemIdx]);

  return (
    <div>
      <form onSubmit={handleAddToCart} className={styles["form-add-to-cart"]}>
        <input name="count" type="number" min="1"
          value={count} onChange={handleChange}/>
        <button>Add To Cart</button>
      </form>
      <p>total price: {price * count}</p>
    </div>
  );
});