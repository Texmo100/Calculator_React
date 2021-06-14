import React from 'react'

const Ycalculator = () => {
    return (
        <div className="y-calculator">
            <div className="result-display"></div>
            <div className="num-pad">
                <div className="button-01">C</div>
                <div className="button-01">+/-</div>
                <div className="button-01">%</div>
                <div className="button-02">/</div>

                <div className="button-01">1</div>
                <div className="button-01">2</div>
                <div className="button-01">3</div>
                <div className="button-02">x</div>

                <div className="button-01">4</div>
                <div className="button-01">5</div>
                <div className="button-01">6</div>
                <div className="button-02">-</div>

                <div className="button-01">7</div>
                <div className="button-01">8</div>
                <div className="button-01">9</div>
                <div className="button-02">+</div>

                <div className="button-01">0</div>
                <div className="button-01">.</div>
                <div className="button-01">delete</div>
                <div className="button-02">=</div>
            </div>
        </div>
    )
}

export default Ycalculator