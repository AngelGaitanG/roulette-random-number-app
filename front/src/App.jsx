
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [displayedNumber, setDisplayedNumber] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const getRandomNumber = async () => {
    setIsSpinning(true);
    setDisplayedNumber(null)
    try {
      const response = await axios.post('http://localhost:3000/roulette');
      const number = response.data.number;
      setRandomNumber(number);
    } catch (error) {
      console.error('No se logro realizar la peticion con exito', error);
    }
  }

  useEffect(() => {
    let interval;
    if (isSpinning) {
      interval = setInterval(() => {
        const fakeNumber = Math.floor(Math.random() * 100) + 1;
        setDisplayedNumber(fakeNumber)
      }, 100);
      setTimeout(() => {
        setIsSpinning(false);
        setDisplayedNumber(randomNumber)
        clearInterval(interval)
      }, 3000)
    }

    return () => clearInterval(interval);
  }, [isSpinning, randomNumber])

  return (
    <div>
      <div>
        {isSpinning ? displayedNumber : randomNumber !== null ? randomNumber : 'Click para girar'}
      </div>
      <button onClick={getRandomNumber} disabled={isSpinning}>
        {isSpinning ? 'Girando' : 'Girar'}
      </button>
    </div>
  )
}

export default App
