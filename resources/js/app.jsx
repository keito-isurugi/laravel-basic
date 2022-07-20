import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ColofulMessage from './components/ColofulMessage';
import { CountUp } from './components/CountUp';
import { Router } from './components/Router';
import { ChakraProvider } from "@chakra-ui/react"



const App = () => {
  console.log('hoge')
  const [hoge, setHoge] = useState(0);
  const btn = () => {
    setHoge(hoge + 1)  
  }

  function AppContainer({children}){
    return <ChakraProvider>{children}</ChakraProvider>
  }

  return (
    <div>
      Hello World!!!?
      <ColofulMessage color="blue">ほげほげ</ColofulMessage>
      <CountUp />
      <button onClick={btn}>ぼたん</button>
      <Router />
    </div>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}