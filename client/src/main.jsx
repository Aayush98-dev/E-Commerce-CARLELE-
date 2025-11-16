// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProviderr } from './Context/Appcon.jsx'
import { MotionConfig } from 'motion/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProviderr>
      <MotionConfig viewport={{once: true}}>
        <App />
      </MotionConfig>
    </AppProviderr>
  </BrowserRouter>,
)
