import questions from './constants/questions.json'
import classes from './App.module.css'
import { useState } from 'react'
import Question from './components/Question'

function App() {

  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [userAnswers,setUserAnswers]=useState([])

  const  handleNextQuestion=()=>{

  }

  return (
    <div className={classes.app}>
     <h1 >Quiz</h1>
    <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>
     {/* {Result component} */}
     
    </div>
  )
}

export default App
