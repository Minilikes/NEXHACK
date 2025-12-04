import { useState } from 'react'
import './App.css'

// IMPORTANT: These names must match the "export default" names
import ApkScan from './components/ApkScan'
import FileShare from './components/FileShare'
import QuantumChat from './components/QuantumChat'

function App() {
  return (
    <div className="container">
      <h1>NEXHACK Security Suite</h1>
      <hr />
      <ApkScan />
      <hr />
      <QuantumChat />
      <hr />
      <FileShare />
    </div>
  )
}

export default App