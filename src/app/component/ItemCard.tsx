'use client';

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "./ItemCard.module.css";
import { delay } from "@/util/timeUtil";

export default function ItemCard(
  {id, title, thumbnail, shortDesc, price} :
  {id: number, title:string, thumbnail: string, shortDesc:string, price: number}
) {
  const [isAdding, setIsAdding] = useState(false);
  const [messageClass , setMessageClass] = useState<string>('');
  const handleAddToCart = useCallback(() => {
    setIsAdding(true);
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, quantity:1})
    })
      .then(response => {if(!response.ok) throw new Error('Failed to add to cart')})
      .then(()=> setMessageClass(styles.success))
      .catch(()=> setMessageClass(styles.failure))
      .finally()
        .then(()=> delay(2000))
        .then(()=> setMessageClass(styles.fadeOut))
        .then(()=> delay(1000))
        .then(()=> setMessageClass(''))
        .then(()=> setIsAdding(false));
  }, [id]);

  return (
    <div className={styles['card-wrapper']}>
      <Link href={'/'+id}>
        <Image className={styles['image']} alt={title} src={thumbnail} width={200} height={200}/>
      </Link>
      <div className={styles['title']}>{title}</div>
      <div className={styles.messageWrapper}>
        <div className={styles['short-description']}>{shortDesc}</div>
        <div className={styles['price']}>{price}</div>
        <button className={styles['button']} onClick={handleAddToCart} disabled={isAdding}>Add To Cart</button>
        <div className={`${styles.message}
          ${messageClass !== styles.failure &&
            messageClass}`}>
          Added to cart!
        </div>
        <div className={`${styles.message}
          ${messageClass !== styles.success &&
            messageClass}`}>
          Failed..? Retry!
        </div>
      </div>
    </div>
  );
}
