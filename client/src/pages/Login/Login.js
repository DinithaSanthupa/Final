import { useState } from "react"
//import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /*const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }*/

  return (
    <form className="login">
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Log in</button>
    </form>
  )
}

export default Login