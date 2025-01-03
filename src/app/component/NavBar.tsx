import Link from "next/link";
import CartIcon from "./cartIcon";

export default function NavBar(){
  return (
    <nav>
      <Link href="/" key="logo">Logo</Link>
      <Link href="/" key="home">Home</Link>
      <Link href="/login" key="login">Login</Link>
      <CartIcon />
    </nav>
  );
}