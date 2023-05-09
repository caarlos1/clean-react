import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from '@/main/factories/pages/login/login-factory'

ReactDOM.render(
  <StrictMode>
    <Router makeLogin={makeLogin} />
  </StrictMode>,
  document.getElementById('main')
)
