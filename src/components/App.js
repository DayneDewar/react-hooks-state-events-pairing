import video from "../data/video.js";
import VideoInfo from "./VideoInfo";
import CommentList from "./CommentList";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo 
        url={ video.embedUrl } 
        title={video.title} 
        views={video.views} 
        uploaded={video.createdAt} 
        likes={video.upvotes} 
        dislikes={video.downvotes}/>
      <CommentList 
        comments={video.comments} />
    </div>
  );
}

export default App;
