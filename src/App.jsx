import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Header } from './components/Header'
import { Features } from './components/Features'
import { CodeAPI } from './components/CodeAPI'

function App() {

  return (
    <>
      <Header />
      <Features />
      <CodeAPI />
    </>
  )
}

export default App
