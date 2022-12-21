import Layout from '../../components/layout/Layout'
import './login.css'

function Login() {
  return (
    <Layout>
      <div className='login'>
        <form className="loginForm">
            <label htmlFor="email">Email</label>
            <input className='loginInput' type="email" placeholder='enter your email.' />
            <label htmlFor="password">Password</label>
            <input className='loginInput' type="password" name="password" id="password" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
    </Layout>
  )
}

export default Login