import { StrictMode } from 'react' //Might have to import React instead of Stric
import { createRoot } from 'react-dom/client' //here ReactDOM
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
