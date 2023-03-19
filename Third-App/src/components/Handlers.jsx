import React, {useState} from 'react'

function Handlers() {
//     const [number, setNumber] = useState(0)
//     const changeHandler = (e) => {
//         setNumber(e.target.value)
//         console.log(e.target.value);
//     }

//   return (
//     <div>
//         <input onChange={changeHandler} />
//         <p>{number}</p>
//     </div>
//   )

// on blur
//     const [isFocused, setIsFocused] = useState(false)
//     const focusHandler = (e) => {
//         setIsFocused(true)
//     }

//     const blurHandler = (e) => {
//         setIsFocused(false)
//     }


// return (

//     <div className="onBlur">
//         <input onFocus={focusHandler} onBlur={blurHandler} />
//         <p>{isFocused ? '집중' : '노집중'}</p>
//     </div>

// )

// keyDouwn 
    // const keyHandler = (e) => {
    //     console.log(e.key)
    //     if (e.key === 'Enter') {
    //         alert('눌렀습니다')
    //     }
    // }



    // return (
    //     <div className="keyDown">
    //         <input type="text" onKeyDown={keyHandler} />
    //     </div>
    // )

    // mouseOver mouse!!!
    const [isHovering, setIsHovering] = useState(false)
    const mouseOverHandler = () => {
        setIsHovering(!isHovering)
    }
    const mouseDownHandler = () => {
        setIsHovering(!isHovering)
    }


    return (
        <div className="hovering">
            <p onMouseOver={mouseOverHandler} onMouseOut={mouseDownHandler}>마우스를 올려 볼까요???</p>
            <p>{isHovering ? '마우스가 들어왔다' : '마우스가 나갔다'}</p>
        </div>
    )
    // mouseOver 와 mouseOut 자식과 관련 유
    // mouseEnter 과 mouseLeave 자식과 관련 무

}

export default Handlers