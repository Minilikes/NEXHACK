import { useState } from 'react'
import './App.css'

// Import your security components
import ApkScan from './components/ApkScan'
import FileShare from './components/FileShare'
import QuantumChat from './components/QuantumChat'

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>NEXHACK Security Suite</h1>
        <p>Advanced Tools for Secure Communication & Analysis</p>
      </header>

      <main>
        {/* Tool 1: APK Scanner */}
        <section style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2>1. APK Vulnerability Scanner</h2>
          <ApkScan />
        </section>

        {/* Tool 2: Quantum Chat */}
        <section style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2>2. Quantum Secure Chat</h2>
          <QuantumChat />
        </section>

        {/* Tool 3: Secure File Share */}
        <section style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px' }}>
          <h2>3. Secure File Share</h2>
          <FileShare />
        </section>
      </main>
    </div>
  )
}

export default App