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
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form action="" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email:" />
          <Input type="password" name="password" placeholder="Digite sua senha:" />
          <button data-testid="submit" className={Styles.submit} disabled={!!state.emailError || !!state.passwordError}>
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
