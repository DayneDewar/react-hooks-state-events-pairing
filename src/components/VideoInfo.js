function VideoInfo(props) {
    return (
      <div>
      <iframe
        width="919"
        height="525"
        src={props.url}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"/>
        <h2>{props.title}</h2>
        <p>{props.views} Views | Uploaded {props.uploaded}</p>
        <button>{props.likes}👍🏽</button>
        <button>{props.dislikes}👎🏾</button>
        </div>
        )}

export default VideoInfo;