import Link from "next/link";
import CartIcon from "./CartIcon";
import styles from "./NavBar.module.css";

export default function NavBar(){
  return (
    <header className={styles['header']}>
      <div className={styles['left-wrapper']}>
        <Link href="/" key="logo" className={styles['logo']}>Logo</Link>
        <Link href="/" key="home" className={styles['route']}>Home</Link>
        {/* Merchant only */}
        <Link href="/register-item" key="register" className={styles['route']}>Register</Link>
        <Link href="/my-item" key="myItem" className={styles['route']}>My Products</Link>
      </div>
      <div className={styles['right-wrapper']}>
        <CartIcon />
        {/* If user is login, profile instead */}
        <Link href="/login" key="login" className={styles['route']}>Login</Link>
        <Link href="/profile" key="profile" className={styles['route']}>Profile</Link>
      </div>
    </header>
  );
}