import React from 'react'
import '../style/Button.scss'

function Button({ size, color }) {
  return (
    <button className={`Button ${size} ${color}`}>
        <p>버튼</p>
    </button>
  )
}

export default Button