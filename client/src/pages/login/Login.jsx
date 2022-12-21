import { Link } from '@reach/router'
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
            <button className="loginButton"><Link to='/login'>Login</Link></button>
        </form>
        <button className="loginRegisterButton"><Link to='/register'>Register</Link></button>
    </div>
    </Layout>
  )
}

export default Login