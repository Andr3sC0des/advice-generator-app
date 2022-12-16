import React from 'react'
import ReactDOM from 'react-dom/client'
import Attribution from './components/Attribution'
import Card from './components/Card'
import "./style.sass"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Card />
      <Attribution />
    </main>
  </React.StrictMode>
)
