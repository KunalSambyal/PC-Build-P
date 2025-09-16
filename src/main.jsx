import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/app/app'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Navbar/>
    <Hero></Hero>
  </StrictMode>
)
