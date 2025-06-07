import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Usercard } from './Usercard'
// import './index.css'
import "./QR.css";
import { QR } from './QR'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Usercard /> */}
    <QR />
  </StrictMode>,
)
