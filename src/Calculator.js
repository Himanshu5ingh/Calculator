import React, { useState } from 'react'
import "./Calculator.css";

function Calculator() {
    const [input, setInput] = useState([])

    const calculateResult = () => {

        try {
            const operators = ['+', '-', '/', '*', '%'];

            let operator = 'null';

            for (let i = 0; i < input.length; i++) {
                if (operators.includes(input[i])) {
                    operator = input[i];
                    break;
                }
            }
            if (!operator) {
                setInput(parseFloat(input).toString());
                return;
            }

            const [operand1, operand2] = input.split(operator).map(parseFloat)

            let result;


            switch (operator) {
                case '+':
                    result = operand1 + operand2
                    break;
                case '-':
                    result = operand1 - operand2
                    break;
                case '/':
                    result = operand1 / operand2
                    break;
                case '*':
                    result = operand1 * operand2
                    break;
                case '%':
                    result = operand1 % operand2
                    break;
                default:
                    throw new Error("Invalid Input")
            }

            setInput(result.toString())
        }
        catch (error) {
            setInput('Error')
        }

    }



    const handleButtonClick = (value) => {
        if (value === 'c') {
            setInput('')
        }
        else if (value === '←') {
            setInput(input.slice(0, -1))
        }
        else if (value === '=') {
            calculateResult(input)
        }

        else {
            setInput((preValue) => preValue + value)
        }
    }
    return (
        <section>
            <div className="container">
                <div id="display">{input}</div>
                <div className="buttons">
                    <button className="button" onClick={() => handleButtonClick('c')}>C</button>
                    <button className="button" onClick={() => handleButtonClick('←')}>←</button>
                    <button className="button" onClick={() => handleButtonClick('%')}>%</button>
                    <button className="button" onClick={() => handleButtonClick('/')}>/</button>
                    <button className="button" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="button" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="button" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="button" onClick={() => handleButtonClick('*')}>*</button>
                    <button className="button" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="button" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="button" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="button" onClick={() => handleButtonClick('-')}>-</button>
                    <button className="button" onClick={() => handleButtonClick('1')}>1</button>
                    <button className="button" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="button" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="button" onClick={() => handleButtonClick('+')}>+</button>
                    <button className="button" onClick={() => handleButtonClick('00')}>00</button>
                    <button className="button" onClick={() => handleButtonClick('0')}>0</button>
                    <button className="button" onClick={() => handleButtonClick('.')}>.</button>
                    <button id="equal" className="button" onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </section>
    )
}

export default Calculator