import React, {useState} from 'react';

import './index.css'

import Header from './Components/Header';


function App() {
  
  function refreshPage(){ 
    window.location.reload(); 
}

return (
 

    <div className='App'>
      <Header/>
      <div className='MainBackground'></div>
  



    </div>   

  );
}

export default App;
