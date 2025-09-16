import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './components/app/app'
import Navbar from './components/navbar/navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Navbar/>
  </StrictMode>
)
