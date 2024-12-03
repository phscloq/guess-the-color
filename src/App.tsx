import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string []>([]);
  const [statement, setStatement] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const getColor = ()=>{
    let newColor = '#';
    for(let i=0; i<6; i++){
      newColor += digits[Math.floor(Math.random()* digits.length )];
    }
    return newColor;
  }

  useEffect(()=>{
    const rightColor = getColor();
    setColor(rightColor);
    const newAnswers = [rightColor, getColor(), getColor()].sort(() => Math.random() - 0.5);
    setAnswers(newAnswers);
  },[])

  const handleClick = (e:any)=>{
    if(e.target.innerHTML === color){
      const rightColor = getColor();
      const newScore = score;
      setColor(rightColor);
      setAnswers([rightColor, getColor(), getColor()].sort(() => Math.random() - 0.5));
      setScore(newScore+1);
      setStatement('Correct!');
      setTimeout(()=>{
        setStatement('');
      }, 1000);
  }
  else{
      setScore(0);
      setStatement('Wrong!');
      setTimeout(()=>{
        setStatement('');
      }, 1000);
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
            
            <div className='score-container'>
              <h2 className='score-title'>Score</h2>
              <p className='score-number'>{score}</p>
            </div>

            <div className='statement-container'>
              <p className={`${statement== 'Correct!' ? 'correct-text': 'wrong-text'}`}>{statement}</p>
            </div>
        </div>
        
      </div>

    </>
  )
}

export default App
