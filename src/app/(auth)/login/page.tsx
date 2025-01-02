'use client';
export default function Login(){
  const handleLogin = async (e: FormData) => {
    console.log("Server tries to login");
    console.log(e.get("username"));
  }
  return (
    <>
    <form action={handleLogin}>
      <div>
      <label about="username">Username: </label>
      <input type="text" id="username" name="username" required/>
      </div>
      <div>
      <label about="username">Password: </label>
      <input type="password" id="password" name="password" required/>
      </div>
      <button>Login</button>
    </form>
    </>
  );
}