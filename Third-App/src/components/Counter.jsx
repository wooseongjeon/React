import React, {useState, useRef} from 'react'

function Counter() {

    // 변수의 경우에는 컴포넌트가 다시 렌더링될때 변수가 초기화됨( 다시 선언됨 )
    // useRef 의 경우에는 컴포넌트가 다시 렌더링되더라도 변수 값을 계속 저장하고 있음
    
    const [answer, setAnswer] = useState()
    const firstValue = useRef(0)
    const secondValue = useRef(0)
    const addValue = () => {
        setAnswer(Number(firstValue.current.value) + Number(secondValue.current.value))
    } 


  return (
    <div>
        <input type="number" ref={firstValue} />
        <input type="number" ref={secondValue} />
        <button onClick={addValue}>더하기</button>
        <h1>
            {answer}
        </h1>
    </div>
  )
}

export default Counter
