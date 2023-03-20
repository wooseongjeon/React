import React, {useState, useRef} from 'react'
import useInput from '../hooks/useInput'

function Login() {  
    // 유저가 입력한 id, pw 받아와서 state 로 저장
    // 이 state 를 서버에 보내는 방식
    // const [userId, setUserId] = useState()
    // const [userPassward, setUserPassward] = useState()
    // const onUserIdChange = (e) => {
    //     console.log(e.target.value)
    //     setUserId(e.target.value)
    // }
    // const onUserPasswardChange = (e) => {
    //     console.log(e.target.value)
    //     setUserPassward(e.target.value)
    // }
    const userId = useRef('')
    const { userInfo, onUserInfoChange } = useInput({ id: '', pw: '' })

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            login()
        }
    }


    const login = () => {
        console.log(userInfo)
        console.log(userId.current.value)
        alert(userInfo.id)
        alert(userInfo.pw)
        alert('로그인')
    }

  return (
    <div onChange={onUserInfoChange}>
        <input name="id" type="text" placeholder='아이디' ref={userId} />
        <input name="pw" type="password" placeholder='비밀번호' onKeyDown={onKeyDown} />
        <button onClick={login}>로그인</button>
    </div>
  )
}

export default Login