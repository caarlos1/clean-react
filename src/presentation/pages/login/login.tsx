import React, { useState, useEffect } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import { type Validation } from '@/presentation/protocols/validation'
import Context from '@/presentation/contexts/form/form-context'

import Styles from './login-style.scss'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email:" />
          <Input type="password" name="password" placeholder="Digite sua senha:" />
          <button className={Styles.submit} data-testid="submit" disabled>
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
