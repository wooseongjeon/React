import React, {useState} from 'react'

function Menu() {
    // const [isClicked, setIsClicked] = useState(false)
    // const toggleMenu = (e) => {
    //     // e.preventDefault()
    //     // 이벤트 기본 동작 정지
    //     // e.stopPropagation
    //          이벤트 버블링 방지...
    //     // console.log(e.target, e.currentTarget)

    // }
    // onClick 안에 함수를 만들지 않고 바로 쓸 수 있지만 메모리 관리 측면에서 이게 더 좋다...

    // 2. 메뉴 핸들...

    const [menuNumber, setMenuNumber] = useState(null)
    const onClick = (e) => {
        setMenuNumber(e.target.id)
    }


  return (
    // <div>
    //     {isClicked ? <p>메뉴</p> : <></>}
    //     <button onClick={toggleMenu}>
    //         {isClicked ? '메뉴 닫기' : '메뉴 펼치기'}
    //     </button>
    // </div>


    <div onClick={onClick}>
        {menuNumber}
        <button id="1">메뉴1</button>
        <button id="2">메뉴2</button>
        <button id="3">메뉴3</button>
    </div>
  )
}

export default Menu