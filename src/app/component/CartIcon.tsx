'use client';

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartIcon(){
  return (
    <div style={{fontSize:'2rem'}}>
      <FontAwesomeIcon icon={faCartShopping}/>
      13
    </div>
  );
}