import React, { useState, useEffect } from 'react'

function Timer({s}) {
    const [seconds, setSeconds] = useState(s);
    const [isClicked, setIsClicked] = useState(false)

    const startTimer = () => {
        setIsClicked(true)
    }

    const stopTimer = () => {
        setIsClicked(false)
    }

    useEffect(() => {
        const countDown = setTimeout(() => {
            if (seconds > 0 && isClicked) {
                setSeconds(seconds - 1)
            } else if (seconds === 0) {
                clearTimeout(countDown)
            }
        }, 1000)
        // setTimeout 함수가 1초 후에 뭔가를 실행하라
        // 1초가 지나기 전에 다른 페이지로 가면, setTimeout 함수는 살아있음
        return () => clearTimeout(countDown)
    }, [seconds, isClicked])

  return (
    <div>
        {seconds}
        <button onClick={() => startTimer()}>시작</button>
        <button onClick={() => stopTimer()}>정지</button>
        <button onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? '타이머 중지' : '타이머 시작'}
        </button>
    </div>
  )
}

export default Timer