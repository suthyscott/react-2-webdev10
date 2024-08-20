import { useState } from "react"

const BrokenCounter = () => {
    const [number, setNumber] = useState(0)

    const handleAddThree = () => {
        setNumber((n) => {
            return n + 1
        })
        setNumber((n) => {
            return n + 1
        })
        setNumber((n) => {
            return n + 1
        })
    }

    console.log('Render')
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={handleAddThree}>Add 3</button>
        </div>
    )
}

export default BrokenCounter
