import React, { memo } from 'react'
import Styles from './login-header-style.scss'
import Logo from '@/presentation/components/logo/logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>Clean Project</h1>
    </header>
  )
}

export default memo(LoginHeader)
