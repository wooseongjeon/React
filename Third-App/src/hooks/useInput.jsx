import React, {useState} from 'react'

function useInput(initialValue) {
    const [userInfo, setUserInfo] = useState(initialValue)

    const onUserInfoChange = (e) => {
        const { name, value } = e.target
        setUserInfo({...userInfo, [name]:value})
    }

    return { useInput, onUserInfoChange }
}

export default useInput