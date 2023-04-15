import React from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Styles from './login-style.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email:" />
        <Input type="password" name="password" placeholder="Digite sua senha:" />
        <button className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
