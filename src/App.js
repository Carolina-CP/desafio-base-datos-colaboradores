
import { useState } from 'react';
import Buscador from './components/Buscador'
import Inputs from './components/Inputs';


function App() {
  const [buscador, setBuscador] = useState('');
 console.log(buscador)
  return (
    <div className='container'>
      <Buscador setBuscador ={setBuscador}/>
      <Inputs buscador ={buscador}/>
    </div>

  );
}
export default App;
