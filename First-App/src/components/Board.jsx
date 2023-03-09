import React, { useState } from 'react'
import { data } from '../constants/data'

function Board({category}) {
    const [posts, setPosts] = useState(data.filter((element) => element.category === category))

    // 리턴 key값을 인덱스 값으로 하면 고유의 값이 아니여서 안쓴다!! 변경의 여지가 있고 고정되지 않음!!
  return (
    <div>
        {posts
            .map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                        <p>{post.category}</p>
                    </div>
                )
            })}
    </div>
  )
}

export default Board