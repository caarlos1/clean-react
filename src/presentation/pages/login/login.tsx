import React, { useState, useEffect } from 'react'
import type { Validation } from '@/presentation/protocols/validation'
import type { Authentication } from '@/domain/usecases'

import Context from '@/presentation/contexts/form/form-context'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

import Styles from './login-style.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()

      if (state.isLoading || state.emailError || state.passwordError) return

      setState({ ...state, isLoading: true })
      await authentication.auth({ email: state.email, password: state.password })
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
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
