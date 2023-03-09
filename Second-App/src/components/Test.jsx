import React, { useState } from 'react'

function Test() {
    const [a, setA] = useState([1, 2, 3])
    console.log(a)

    return (
        <div>
            {a}
            <button onClick={() => {
                    a.push(4)
                    setA(a)
                }}>
                테스트
            </button>
        </div>
    )
}

export default Test