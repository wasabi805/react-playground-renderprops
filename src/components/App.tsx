import React from 'react'
import ButtonWrapper from './ButtonWrapper'
import ButtonOne from './ButtonOne'
import ButtonTwo from './ButtonTwo'

function App() {
  return <div className="App">
    <ButtonWrapper
      render={(count, incrementCount) => <ButtonOne count={count} incrementCount={incrementCount}/> } />

    <ButtonWrapper
      render={(count, incrementCount) => <ButtonTwo count={count} incrementCount={incrementCount}/> } />
  </div>
}

export default App
