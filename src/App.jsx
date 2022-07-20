import { useState } from 'react';
import './App.scss';
import Comprar from './Comprar/Comprar';
import Intro from './intro/Intro';
import Mate from './Mate/Mate';

function App() {
  const [mate, setMate] = useState('0');

  return (
    <>
      <div className='navBar'>
        <h1> LOS MATES DE FRAN </h1>
        <div className='links'>
          <ul>
            <li onClick={() => setMate('0')}> HOME </li>
            <li onClick={() => setMate('1')}> QUE ES EL MATE </li>
            <li onClick={() => setMate('2')}> DONDE COMPRAR UN MATE </li>
          </ul>
        </div>
      </div>
      <div className='body'>
        {mate === '0' ? (
          <Intro />
        ) : mate === '1' ? (
          <Mate />
        ) : mate === '2' ? (
          <Comprar />
        ) : (
          <Intro />
        )}
      </div>
    </>
  );
}

export default App;

// {mate === "1" ?
// (<Nada/>):
// mate === "2" ?
// (<Mate/>):
// mate === "3" ?
// (<Amargo/>):
// (<NavBar/>)
// }
