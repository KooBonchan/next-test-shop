import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: {label: "Username", type:"text", placeholder:"Username or Email"},
    username: {label: "Password", type:"password"},
  },
  authorize: (credentials) => (
    axios.post(
      url= "/api/user/login/",
      config= {
        username: credentials?.username,
        password: credentials?.password,
      },
    )
    .then(res=>res.data)
    .catch(error=>{
      if(axios.isAxiosError(error)){ throw new error.response()?.data[0];}
    }))
})