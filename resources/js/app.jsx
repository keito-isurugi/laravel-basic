import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ColofulMessage from './components/ColofulMessage';
import { CountUp } from './components/CountUp';
import { Router } from './components/Router';



const App = () => {
  console.log('hoge')
  const [hoge, setHoge] = useState(0);
  const btn = () => {
    setHoge(hoge + 1)  
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