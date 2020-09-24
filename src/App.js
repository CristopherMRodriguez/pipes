import React, {useState} from 'react';
import './App.css';
import IntroPage from "./Pages/IntroPage/IntroPage"
import MainPage from "./Pages/MainPage/MainPage"


function App() {
  const index = 0;

  return ( 
<div>
  {index === 1 ? <IntroPage /> : <MainPage />}
</div>
  )
  
}

export default App;
