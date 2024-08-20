import './dice.css'
import { useState } from 'react'

const Die = ({sides}) => {
    const [diceValue, setDiceValue] = useState('?')

    const getRandomNum = (upperLimit) => {
        return Math.ceil(Math.random() * upperLimit)
    }

    const roll = () => {
        const rollResult = getRandomNum(sides)
        setDiceValue(rollResult)
    }

    return (
        <button className='die' onClick={roll}>
            <i>sides={sides}</i>
            <b>{diceValue}</b>
        </button>
    )
}

export default Die