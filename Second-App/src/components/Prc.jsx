import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

function Prc() {
  const [times, setTimes] = useState([
    { id: 1, tz: 'Asia/Seoul', time: moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss') },
    { id: 2, tz: 'Asia/Yangon', time: moment().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss') },
    { id: 3, tz: 'US/Pacific', time: moment().tz('US/Pacific').format('YYYY-MM-DD HH:mm:ss') }
  ])

  const removeTime = (id) => {
    setTimes(times.filter((time) => time.id !== id))
  }

  useEffect(() => {
    setTimeout(() => {
      setTimes(times.map(time => ({...time, time: moment().tz(time.tz).format('YYYY-MM-DD HH:mm:ss')})))
    }, 1000)
  }, [times]) 

  return (
    <div>
      {times.map((time) => (
        <div key={time.id}>
          <h1>{time.tz}의 현재시각</h1>
          <h2>{time.time}</h2>
          <button onClick={() => removeTime(time.id)}>제거하기</button>
        </div>
      ))}
    </div>
  )
}

export default Prc
