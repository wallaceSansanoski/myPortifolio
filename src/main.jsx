import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextScroolProvider } from './Context/ContextScrool.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextScroolProvider>
      <App />
    </ContextScroolProvider>
  </React.StrictMode>,
)
