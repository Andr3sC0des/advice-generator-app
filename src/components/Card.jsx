import React from "react"
import { useState, useEffect } from "react"

import { default as dice} from "../images/icon-dice.svg"
import { default as dividerDesktop } from "../images/pattern-divider-desktop.svg"
import { default as dividerMobile } from "../images/pattern-divider-mobile.svg"



const Card = () => {
    const [advice, setAdvice] = useState({})


    const newAdvice = () => {
        fetch("https://api.adviceslip.com/advice", {cache: "no-store"})
            .then(response => response.json())
            .then(json => {setAdvice(json.slip)})
    }

    useEffect(()=>{
        newAdvice()
    }, [])

    return (
        <>
            <section className="card">
                <span className="card__num">Advice #{advice.id}</span>
                <h1 className="card__title">{advice.advice}</h1>

                <picture>
                    <source media="(min-width: 480px )" srcSet={dividerDesktop} />
                    <img className="card__image" src={dividerMobile} alt="" />
                </picture>

                <button onClick={newAdvice} className="card__button">
                    <img src={dice} alt="" />
                </button>
            </section>
        </>
    );
}

export default Card