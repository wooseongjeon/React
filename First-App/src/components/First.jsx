import React, { useState } from 'react'
// props -> { name: '전우성', number: 5 } = 구조 분해 할당
function First(props) {
    // const { name = '기본이름', number = '숫자입력' } = props
    const [test, setTest] = useState(0)

    // 카운트 다운
    // let test = 0
    const countUp = () => {
      setTest(test+1)
    }
    const countDown = () => {
      setTest(test-1)
    }

  return (
    <div>
      <p>{test}</p>
      <button onClick={countUp}>카운트업!</button>
      <button onClick={countDown}>카운트다운!</button>
    </div>
  )
}

// First.defaultProps = {
//   name: '기본이름',
//   number: '숫자를 입력하세요'
// }

export default First