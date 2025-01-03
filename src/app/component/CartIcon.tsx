'use client';

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./CartIcon.module.css"

export default function CartIcon(){
  return (
    <Link href="/cart">
      <div className={styles['cart-icon-wrapper']}>
        <span style={{fontSize:'2.5rem'}}>
          <FontAwesomeIcon icon={faCartShopping}/>
        </span>
        <span className={styles['cart-item-count']}>27</span>
      </div>
      
    </Link>
  );
}