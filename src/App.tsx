import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string []>([]);
  const [statement, setStatement] = useState<string>("");
  const getColor = ()=>{
    let newColor = '#';
    for(let i=0; i<6; i++){
      newColor += digits[Math.floor(Math.random()* digits.length )];
      console.log(newColor);
      console.log(i);
    }
    setColor(newColor); 
    return newColor;
  }

  useEffect(()=>{
    getColor();
    const newAnswers = [color, getColor(), getColor()].sort(() => Math.random() - 0.5);
    setAnswers(newAnswers);
  },[])

  const handleClick = (e:any)=>{
    if(e.target.innerHTML === color){
      const rightColor = getColor();
      setColor(rightColor);
      setAnswers([rightColor, getColor(), getColor()].sort(() => Math.random() - 0.5));
      setStatement('Correct!');
  }
  else{
      setStatement('Wrong!');
  }
  }
  return (
    <>
      <div className='App'>
        <div className='game-container'>
            <h1>Guess the Color!</h1>
            <div className='question' style={{background:color}}>
            </div>
            <div className='options'>
              {answers.map((answer)=>{
                return <button className='answer' onClick={handleClick}>{answer}</button>
              })}
            </div>
            <p className={`${statement== 'Correct!' ? 'correct-text': 'wrong-text'}`}>{statement}</p>

        </div>
      </div>

    </>
  )
}

export default App
