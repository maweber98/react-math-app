import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

const MathComponent = (props) => {
    let gameType = props.type;

    let [num1, setNum1] = useState(Math.ceil(Math.random() * 10));
    let [num2, setNum2] = useState(Math.ceil(Math.random() * 10));
    let [score, setScore] = useState(0);
    let [isCorrect, setIsCorrect] = useState(true);
    // let [gameType, setGameType] = useState('+');

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsCorrect(true);
        console.log('Orignal State', isCorrect);
 
        setNum1(Math.ceil(Math.random() * 10));
        setNum2(Math.ceil(Math.random() * 10));
        
        let userAnswer = parseInt(e.target.name.value);

        let answer = (gameType === "+") ? num1 + num2 : num1 * num2;
        // console.log(answer === userAnswer);

        if(answer === userAnswer) {
            // console.log('Correct', isCorrect);
            setIsCorrect(true);
            setScore(score +1);
            e.target.name.value = '';
        } else {
            setIsCorrect(false);
            // console.log('Wrong Answer', isCorrect);
            e.target.name.value = '';
        }
    }

    const getRandomKey = () => {
        console.log('Get Random Key Ran');
        return uuidv4();
    }

    // const handleGameType = () => {
    //     console.log("Game Type Button Pressed");
    // }

    return (
        <div className="body">
            <h1>Math Quiz</h1>
            {/* <span>
                <Button variant="outline-dark m-1 mb-3">Add</Button>
                <Button variant="outline-dark m-1 mb-3">Multiply</Button>
            </span> */}
            <h2>{num1} {gameType} {num2}</h2>

            <form onSubmit={handleSubmit}>
            <input size="10" type="text" name="name"></input>
            <Button variant="secondary" type="submit">Submit</Button>
            </form>
            <div key={getRandomKey()} className={isCorrect ? 'fadeOut':'isFalse fadeInAnimation'}>{isCorrect ? 'CORRECT' : 'FALSE' }</div>
            <h3>Score: {score >= 10 ? 'You are now the smartest man alive!' : score}</h3>
        </div>
    )
}

export default MathComponent;