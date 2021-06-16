import React, { useState } from 'react'
import NumPad from '../data/NumPad'

const Ycalculator = () => {
    const [result, setResult] = useState("0")
    const [number, setNumber] = useState("0")

    const numPadRender = NumPad.map(item => <button key={item.id} className={item.cssClass} onClick={() => buttonHandle(item)}>{item.value}</button>)

    const buttonHandle = (item) => {
        const { type, value } = item

        if ((type === "operator") && (value === "C")) {
            setResult("0")
            setNumber("0")
        }else if ((type === "operator") && (value === "=")){
            if(centinel(result) === false){
                setResult(result)
            }else{
                if(reaper(result).operator === "/"){
                    let number1 = parseInt(reaper(result).number)
                    let number2 = parseInt(number)
                    let calc =  number1 / number2
                    setResult(calc.toString())
                    setNumber('')
                }else if(reaper(result).operator === "x"){
                    let number1 = parseInt(reaper(result).number)
                    let number2 = parseInt(number)
                    let calc =  number1 * number2
                    setResult(calc.toString())
                    setNumber('')
                }else if(reaper(result).operator === "-"){
                    let number1 = parseInt(reaper(result).number)
                    let number2 = parseInt(number)
                    let calc =  number1 - number2
                    setResult(calc.toString())
                    setNumber('')
                }else if(reaper(result).operator === "+"){
                    let number1 = parseInt(reaper(result).number)
                    let number2 = parseInt(number)
                    let calc =  number1 + number2
                    setResult(calc.toString())
                    setNumber('')
                }
            }
        }else {
            if(centinel(result) === true){
                if(type === "operator"){
                    setResult(prevState => {
                        let example = reaper(prevState).number
                        example = example + value
                        return example
                    })
                }else{
                    setNumber(prevState => {
                        if (prevState === "0") {
                            return value
                        }else {
                            const newNumber = prevState + value
                            return newNumber
                        }
                    })
                }
            }else{
                setResult(prevState => {
                    if (prevState === "0") {
                        return value
                    }else {
                        const newResult = prevState + value
                        return newResult
                    }
                })
            }
        }
    }

    // ---- Centinel function
    const centinel = (objetive) => {
        const operators = ["/","x","-","+"]

        let flag = false

        operators.forEach(operator => {
            if(objetive.includes(operator)){
                flag = true
            }
        })

        return flag
    }

    // ---- Reaper function
    const reaper = (objetive) => {
        const operators = ["/","x","-","+"]

        let hook = ''
        let finder = 0
        let example = ''
        let box = {}

        operators.forEach(operator => {
            if(objetive.includes(operator)){
                finder = objetive.search(`/${operator}/`)
                hook = operator
                example = objetive.replace(operator, '')
                
                box = {
                    position: finder,
                    operator: hook,
                    number: example,
                }
            }
        })

        return box
    }

    return (
        <div className="y-calculator">
            <div className="result-display">
                <p style={number === "0" ? {color: "transparent" } : {color: "#00aaff"} }>{number}</p>
                <p>{result}</p>
            </div>
            <div className="num-pad">
                {numPadRender}
            </div>
        </div>
    )
}

export default Ycalculator