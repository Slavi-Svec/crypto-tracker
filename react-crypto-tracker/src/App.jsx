import React from 'react'
import './App.scss'

function App() {
  return (
    <section className="app">
      <div className="app__header">
        <h1 className="app__head">CryptoTracker.link</h1>
        <form>
          <input
            className="app__input-field"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
    </section>
  )
}

export default App
