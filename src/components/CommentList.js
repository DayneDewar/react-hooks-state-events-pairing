

function CommentList(props) {
    const allComments = props.comments.map(post => {
        return (post.user,
            post.comment);
    })
    return (
        <div>
            <h2>{allComments.length}</h2>
            {/* {allComments.user} */}
            {allComments}
        </div>
    )
}

export default CommentList;