import React, { useState } from 'react'
import moment from 'moment-timezone'

function Prc() {
  const [times, setTimes] = useState([
    { id: 1, tz: 'Asia/Seoul' },
    { id: 2, tz: 'Asia/Yangon' },
    { id: 3, tz: 'US/Pacific' }
  ])

  const removeTime = (id) => {
    setTimes(times.filter((time) => time.id !== id))
  }

  return (
    <div>
      {times.map((time) => (
        <div key={time.id}>
          <h1>{time.tz}의 현재시각</h1>
          <h2>{moment().tz(time.tz).format('YYYY-MM-DD HH:mm:ss')}</h2>
          <button onClick={() => removeTime(time.id)}>제거하기</button>
        </div>
      ))}
    </div>
  )
}

export default Prc
