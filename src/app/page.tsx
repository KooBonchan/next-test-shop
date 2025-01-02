import Link from "next/link";
import styles from "./page.module.css";

function NavBar({currentPage}:{currentPage?: string}){
  if(currentPage !== undefined) return <></>
  return (
    <nav>
      <Link href="/" key="logo">LOGO</Link>
      <Link href="/" key="home">Home</Link>
    </nav>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Link href="/23">item</Link>
    </div>
  );
}
