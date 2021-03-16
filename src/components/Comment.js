import React, { useState } from "react";
function Comment({name, comment}) {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    function increaseLikes() {
        return setLikes(likes + 1)
    }
    function increaseDislikes() {
        return setDislikes(dislikes + 1)
    }
    return (
        <div>
            <h4>{name}</h4>
            <p>{comment}</p>
            <button onClick={increaseLikes}>{likes}👍🏽</button>
            <button onClick={increaseDislikes}>{dislikes}👍🏽</button>
            <button onClick>❌</button>

        </div>
)}

export default Comment;