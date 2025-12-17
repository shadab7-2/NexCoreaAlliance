import React from 'react'
import './App.css'
import { UserContextProvider } from './context/UserContext';

import FetchDemo from './components/fetchDemo';
function App() {

  return(
    <>
    <h1>Hi</h1>
    <FetchDemo/>
    </>
  )
}

export default App
