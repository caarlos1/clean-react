import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('main')
)
