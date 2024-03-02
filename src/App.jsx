import { useState } from 'react'
import './App.css'
import Cards from './component/Cards.jsx'

function App() {

  return (
    <div className='app'>
       <div className="banner">
          <h1>Community Sports Events</h1>
      </div>
      <Cards />
    </div>
  );

}

export default App;
