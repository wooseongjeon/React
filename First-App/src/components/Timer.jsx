import React, { useState } from 'react'
import moment from 'moment-timezone'
import { timeZones } from '../constants/dataTimeZone'

function Timer() {
    const [time, setTime] = useState(moment().tz().format('YYYY-MM-DD HH:mm:ss'))
    // const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))
    // const toSeoul = () => {
    //     setTime(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))
    // }
    // const toPacific= () => {
    //     setTime(moment().tz('US/Pacific').format('YYYY-MM-DD HH:mm:ss'))
    // }
    // const toTokyo= () => {
    //     setTime(moment().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'))
    // }
    // const changeTz = (tz) => {
    //     setTime(moment().tz(tz).format('YYYY-MM-DD HH:mm:ss'))
    // }
    


  return (
    <div>
        <h1>현재 시각</h1>
        <h2>{time}</h2>
        {/* <button onClick={() => changeTz('Asia/Seoul')}>서울</button>
        <button onClick={() => changeTz('US/Pacific')}>태평양</button>
        <button onClick={() => changeTz('Asia/yangon')}>앙곤</button> */}
    </div>
  )
}

export default Timer