import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Header } from './components/Header'
import { Features } from './components/Features'
import { CodeAPI } from './components/CodeAPI'
import { Pricing } from './components/Pricing'
import { Questions } from './components/Questions'
import { Services } from './components/Services'
import { GetStarted } from './components/GetStarted'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Features />
      <CodeAPI />
      <Pricing />
      <Questions />
      <Services />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App
