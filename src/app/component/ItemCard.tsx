'use client';

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "./ItemCard.module.css";

export default function ItemCard(
  {id, title, thumbnail, shortDesc, price} :
  {id: number, title:string, thumbnail: string, shortDesc:string, price: number}
) {
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleAddToCart = useCallback(() => {
    setIsAdding(true);
    fetch('/api/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, quantity:1})
    })
    .then(response => response.status)
    .then(()=> setShowSuccess(true))
    .then(()=> new Promise(resolve => setTimeout(() => resolve(true), 2000)))
    .then(()=> setShowSuccess(false))
    .finally(() => setIsAdding(false));
  }, [id]);

  return (
    <div>
      <Link href={'/'+id}>
        <Image alt={title} src={thumbnail} width={200} height={200}/>
      </Link>
      <div>{title}</div>
      <div className={`${styles.messageWrapper} ${showSuccess && styles.success}`}>
        <div>{shortDesc}</div>
        <div>{price}</div>
        <button onClick={handleAddToCart} disabled={isAdding}>Add To Cart</button>
        <div className={`${styles.successMessage} ${showSuccess && styles.success}`}>
          Added to cart!
        </div>
      </div>
    </div>
  );
}
