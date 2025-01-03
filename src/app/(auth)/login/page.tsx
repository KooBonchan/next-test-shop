import styles from './page.module.css';
import Form from 'next/form';

export default async function Login(){
  const handleLogin = async function (e: FormData) {
    'use server'
    console.log("Client tries to login");
    console.log("Internal Server Request occurred: ",e.get("username"));
  }
  return (
    <>
    <Form action={handleLogin} className={styles['form-login']}>
      <label about="username">Username: </label>
      <input type="text" id="username" name="username" required/>
      <label about="username">Password: </label>
      <input type="password" id="password" name="password" required/>
      <button className={styles['form-button']}>Login</button>
      <button type='button' className={styles['form-button']}>signup</button>
    </Form>
    </>
  );
}