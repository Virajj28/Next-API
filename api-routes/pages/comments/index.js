import {useState} from 'react'

export default function CommentsPage () {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    return (
        <>
        <h1>Comments Page</h1>
         <button onClick={fetchComments}>Load Comments</button>
         {
             comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id}
                        <h3>{comment.text}</h3>
                        <hr/>
                    </div>   
             )})
         }
        </>
    )
}