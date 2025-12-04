import { useState } from 'react'
import './App.css'

import ApkScan from './components/ApkScan'
import FileShare from './components/FileShare'
import QuantumChat from './components/QuantumChat'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>NEXHACK Security Suite</h1>
      </div>

      <div className="card-container">
        {/* Tool 1 */}
        <div className="card">
          <ApkScan />
        </div>

        {/* Tool 2 */}
        <div className="card">
          <QuantumChat />
        </div>

        {/* Tool 3 */}
        <div className="card">
          <FileShare />
        </div>
      </div>
    </div>
  )
}

export default App