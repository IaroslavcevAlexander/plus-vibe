import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './tasksFromDanyk/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <User />
  </StrictMode>,
)
