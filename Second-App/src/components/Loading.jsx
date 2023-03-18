import React, { useState, useEffect } from 'react'

function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setText('추가')// 뭐지 시이팔;;
    }
  }, [isLoading]) // 여기 추가하는건 웬만하면 하면 안된다...

  useEffect(() => {
    if (text === '추가') {
      setTimeout(() => {
        setIsLoading(true)
      }, 1000)
    }
  }, [text])

  return (
    <div>
      {isLoading ? null : <>로딩 완료!!</>}
      
      <p>{text}</p>
    </div>
  )
}

export default Loading