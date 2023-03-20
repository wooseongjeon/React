import React, {useState, useRef} from 'react'

function Timer() {
    // 실습.... 유저가 시간초를 설정할 수 있는 타이머 만들기....
    const [time, setTime] = useState(0)
    const userNumber = (e) => {
        setTime(e.target.value)
    }
    
    const timeSet = () => {
        setTime(userNumber)
    }

    const keyEnter = (e) => {
        if (e.key === 'Enter') {
            console.log()
            setTime(userNumber)
        }
    }




  return (
    <div>
        <input type="Number" onChange={userNumber} onKeyDown={keyEnter}/>
        <button onClick={timeSet}>타이머 설정</button>
        <h1>
            
        </h1>
    </div>
  )
}

export default Timer