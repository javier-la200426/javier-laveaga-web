import { StrictMode } from 'react' //Might have to import React instead of Stric
import { createRoot } from 'react-dom/client' //here ReactDOM
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './common/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
