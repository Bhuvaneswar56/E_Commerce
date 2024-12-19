import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './Context/GlobalContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </GlobalContextProvider>

)
