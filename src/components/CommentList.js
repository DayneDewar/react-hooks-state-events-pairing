import React, { useState } from "react";
import video from "../data/video.js";
import Comment from "./Comment.js"


function CommentList() {
    const [hidden, setHidden] = useState(false)
    
    function hideComments(){
        setHidden(!hidden) 
    }

    const allComments = video.comments.map(post => {
        return (
            console.log(post.user),
            <Comment name = {post.user}  comment={post.comment}/>
            );
    })
    return (
        
        <section class="allComments">
            <br></br>
            <button onClick={hideComments}>{hidden ? "Show Comments" : "Hide Comments"}</button>
            <h1>{allComments.length} Comments </h1> 
            {hidden ? null : allComments}
            </section>
        
    )
}

export default CommentList;