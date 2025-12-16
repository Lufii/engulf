import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Engulf from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Engulf />
  </StrictMode>,
)
