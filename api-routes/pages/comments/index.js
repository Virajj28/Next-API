import {useState} from 'react'

export default function CommentsPage () {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <>
        <h1>Comments Page</h1>
         <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Send me !!!</button>
         <button onClick={fetchComments}>Load Comments</button>
         {
             comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id}
                        <h3>{comment.text}</h3>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        <hr/>
                    </div>   
             )})
         }
        </>
    )
}