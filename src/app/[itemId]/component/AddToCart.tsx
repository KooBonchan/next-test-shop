'use client'

import { FormEvent, useCallback } from "react";

export default function AddToCart(
  {itemIdx}:
  {itemIdx: number}
){
  const handleAddToCart = useCallback((e:FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(itemIdx, form.count.value);
  },[itemIdx]);

  return (
    <>
    <form onSubmit={handleAddToCart}>
      <input name="count" type="number" min="1" defaultValue={1} />
      <button>Add To Cart</button>
    </form>
    </>
  );

}