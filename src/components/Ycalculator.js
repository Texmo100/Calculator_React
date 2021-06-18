import React, { useState } from 'react'
import NumPad from '../data/NumPad'

const Ycalculator = () => {
    // ---- State using useState
    const [result, setResult] = useState("0")
    const [number, setNumber] = useState("0")

    // ---- Render al numpad (numbers and operators)
    const numPadRender = NumPad.map(item => <button key={item.id} className={item.cssClass} onClick={() => buttonHandle(item)}>{item.value}</button>)

    // ---- Handle button to control all button's behavior
    const buttonHandle = (item) => {
        const { type, value } = item

        if ((type === "operator") && (value === "C")) { // ---- C Operator
            setResult("0")
            setNumber("0")
        }else if ((type === "operator") && (value === "%")){ // ---- % Operator
            if (result === '0'){
                setResult('0')
            }else if (reaper(result).number === '' && (number === '0')){
                setResult('0')
            }else if((result !== '0') && (centinel(result) === false)){
                setResult('0')
            }else if((centinel(result) === true) && (number === '0')){
                let pNumber = 0
                let porcentage = 100

                if(isDecimal(result) === true){
                    pNumber = parseFloat(reaper(result).number)
                }else{
                    pNumber = parseInt(reaper(result).number)
                }

                if ((reaper(result).operator === "/")||(reaper(result).operator === "x")) {
                    let porcentageCalc = (pNumber / porcentage) 
                    setResult(porcentageCalc.toString())
                    setNumber('0')
                }else if ((reaper(result).operator === "-")||(reaper(result).operator === "+")) {
                    let porcentageCalc = (pNumber * pNumber) / porcentage
                    setResult(porcentageCalc.toString())
                    setNumber('0')
                }
            }else if((centinel(result) === true) && (number !== '0')){
                let pNumber1 = 0
                let pNumber2 = 0
                let porcentage = 100

                if(isDecimal(result) === true){
                    pNumber1 = parseFloat(reaper(result).number)
                    pNumber2 = parseFloat(number)
                }else{
                    pNumber1 = parseInt(reaper(result).number)
                    pNumber2 = parseInt(number)
                }

                if ((reaper(result).operator === "/")||(reaper(result).operator === "x")) {
                    let porcentageCalc = (pNumber2 / porcentage)
                    setResult(porcentageCalc.toString())
                    setNumber('0')
                }else if ((reaper(result).operator === "-")||(reaper(result).operator === "+")) {
                    let porcentageCalc = (pNumber1 * pNumber2) / porcentage
                    setResult(porcentageCalc.toString())
                    setNumber('0')
                }
            }
        }else if ((type === "operator") && (value === "+/-")){ // ---- +/- Operator
            if(centinel(result) !== true){
                if(result === "0"){
                    setResult(result)
                }else if(result[0] === "-"){
                    let cutter = result.replace('-', '+')
                    setResult(cutter)
                }else if(result[0] === '+'){
                    let cutter = result.replace('+', '-')
                    setResult(cutter)
                }else{
                    setResult(`-${result}`)
                }
            }else{
                if(number === "0"){
                    setNumber(number)
                }else if(number[0] === "-"){
                    let cutter = number.replace('-', '+')
                    setNumber(cutter)
                }else if(number[0] === '+'){
                    let cutter = number.replace('+', '-')
                    setNumber(cutter)
                }else{
                    setNumber(`-${number}`)
                }
            }
        }else if((type === "dot") && (value === ".")){ // ---- . Dot
            if(centinel(result) === false){
                if(result.includes('.')){
                    setResult(result)
                }else{
                    setResult(result + value)
                }
            }else{
                if(number.includes('.')){
                    setNumber(number)
                }else{
                    setNumber(number + value)
                }
            }

        }else if((type === "operator") && (value === "delete")){ // ---- delete Operator
            if((centinel(result) === true) && (number === "0")){
                if(result === "0"){
                    setResult("0")
                }else{
                    let extractor = result.slice(0, -1)
                    if(extractor.length === 0){
                        setResult("0")
                    }else{
                        setResult(extractor)
                    }
                }
            }else if(centinel(result) === true){
                if(result === "0"){
                    setNumber("0")
                }else{
                    let extractor = number.slice(0, -1)
                    if(extractor.length === 0){
                        setNumber("0")
                    }else{
                        setNumber(extractor)
                    }
                }
            }else{
                if(result === "0"){
                    setResult("0")
                }else{
                    let extractor = result.slice(0, -1)
                    if(extractor.length === 0){
                        setResult("0")
                    }else{
                        setResult(extractor)
                    }
                }
            }
        }else if ((type === "operator") && (value === "=")) { // ---- = Operator
            if (centinel(result) === false) {
                setResult(result)
            }else if (reaper(result).number === '' && (number === '0')){
                setResult('0')
            }else if (reaper(result).number === '' && (number !== '0')){
                let xNumber = 0

                if (isDecimal(number) === true) {
                    xNumber = parseFloat(number)
                } else {
                    xNumber = parseInt(number)
                }

                if (reaper(result).operator === "/") {
                    let calc = 0 / xNumber
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "x") {
                    let calc = 0 * xNumber
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "-") {
                    let calc = 0 - xNumber
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "+") {
                    let calc = 0 + xNumber
                    setResult(calc.toString())
                    setNumber('0')
                }
            }else {
                let number1 = 0
                let number2 = 0

                if (isDecimal(result) === true) {
                    number1 = parseFloat(reaper(result).number)
                    number2 = parseFloat(number)
                } else {
                    number1 = parseInt(reaper(result).number)
                    number2 = parseInt(number)
                }

                if (reaper(result).operator === "/") {
                    let calc = number1 / number2
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "x") {
                    let calc = number1 * number2
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "-") {
                    let calc = number1 - number2
                    setResult(calc.toString())
                    setNumber('0')
                } else if (reaper(result).operator === "+") {
                    let calc = number1 + number2
                    setResult(calc.toString())
                    setNumber('0')
                }
            }
        } else { // ---- Just write numbers and operators in calc
            if (centinel(result) === true) {
                if (type === "operator") {
                    setResult(prevState => {
                        let example = reaper(prevState).number
                        example = example + value
                        return example
                    })
                } else {
                    setNumber(prevState => {
                        if (prevState === "0") {
                            return value
                        } else {
                            const newNumber = prevState + value
                            return newNumber
                        }
                    })
                }
            } else {
                setResult(prevState => {
                    if (prevState === "0") {
                        return value
                    } else {
                        const newResult = prevState + value
                        return newResult
                    }
                })
            }
        }
    }

    // ---- Centinel function (to verify if there's an operator in calc)
    const centinel = objective => {
        const operators = ["/", "x", "-", "+"]

        let flag = false

        operators.forEach(operator => {
            if (objective[objective.length -1] === operator) {
                flag = true
            }
        })

        return flag
    }

    // ---- Reaper function (locate and identify the number, operator and position)
    const reaper = objective => {
        const operators = ["/", "x", "-", "+"]

        let hook = ''
        let changer = ''
        let box = {}

        operators.forEach(operator => {
            if (objective[objective.length -1] === operator) {
                hook = operator
                changer = objective.slice(0, -1)

                box = {
                    operator: hook,
                    number: changer,
                }
            }
        })

        return box
    }

    // ---- Verify if the objetive is decimal number
    const isDecimal = objective => {
        if (objective.includes('.')) {
            return true
        }
        return false
    }

    return (
        <div className="y-calculator">
            <div className="result-display">
                <p style={number === "0" ? { color: "transparent" } : { color: "#00aaff" }}>{number}</p>
                <p>{result}</p>
            </div>
            <div className="num-pad">
                {numPadRender}
            </div>
        </div>
    )
}

export default Ycalculator