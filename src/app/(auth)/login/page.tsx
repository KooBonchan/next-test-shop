'use client';
import styles from './page.module.css';

export default function Login(){
  const handleLogin = async (e: FormData) => {
    console.log("Client tries to login");
    console.log("Internal Server Request occurred: ",e.get("username"));
  }
  return (
    <>
    <form action={handleLogin} className={styles['form-login']}>
      
      <label about="username">Username: </label>
      <input type="text" id="username" name="username" required/>
      <label about="username">Password: </label>
      <input type="password" id="password" name="password" required/>
      <button className={styles['form-button']}>Login</button>
      <button type='button' className={styles['form-button']}>signup</button>
    </form>
    </>
  );
}