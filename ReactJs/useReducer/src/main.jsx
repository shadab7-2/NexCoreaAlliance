import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseReducerDemo from './components/UseReducerDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <UseReducerDemo/> */}
  </StrictMode>,
)
