import React from 'react'

function Intro(props) {
    const { name, age, email, comment } = props

  return (
    <div>
        <p>
            안녕하세요! 제 이름은 {name}이고, 나이는 {age}살 입니다.
            {email}, {comment}
        </p>
    </div>
  )
}

export default Intro