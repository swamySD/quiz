import React from 'react'
import classes from './Question.module.css'
const Question = ({question,onAnswerClick}) => {
  return (
    <div className={classes.question}>
        <h2>{question.question}</h2>
        <ul className={classes.options}>
            {question.answeroptions.map(eachOption=>(
                <li key={eachOption.text}><button onClick={()=>onAnswerClick(eachOption.isCorrect)}>{eachOption.text}</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Question