import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('main')
)
