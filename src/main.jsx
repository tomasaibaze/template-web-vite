import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppProviders from './providers/AppProviders.jsx'
import { assertClerkEnv } from './lib/clerk.js'

assertClerkEnv()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders />
    </BrowserRouter>
  </StrictMode>,
)
