import React, {useState} from 'react'
import { data } from '../constants/data'

function Board() {
    const [posts, setPosts] = useState(data)
    // push 를 쓰는게 아니라
    // [...기존값, 추가할 값] -> 아예 새로운 배열/객체가 탄생
    const addPost = (post) => {
        setPosts([...posts, post])
    }
    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    } // 일치하지 않는 것만 남긴다... =-> 해당 id만 제외한다..

    const updatePost = (newPost, id) => {
        // 배열.map(요소 => 우리가 수정하고자 하는 그 데이터인지? (맞다면) 수정할 값 : (아니라면) 원래 요소)
        setPosts(posts.map(post => post.id === id ? newPost : post))
    }


  return (
    <div>
        {posts.map(post => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <button onClick={() => removePost(post.id)}>제거하기</button>
                <button onClick={() => updatePost({...post, title: 'NEW'}, post.id)}>수정하기</button>
            </div>
        ))}
        <button onClick={() => addPost({id: 0, title: 'new', content:'new'})}>추가하기</button>
    </div>
  )
}

export default Board