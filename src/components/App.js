import React, { useState, useEffect } from "react";

// import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos';

const App = () => {

  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // My custom hook
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect(() => {
  //   onTermSubmit("buildings");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   console.log(response.data.items);
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  // const onVideoSelect = (video) => {
  //   console.log("From the App = ", video);
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      {/* <SearchBar onFormSubmit={onTermSubmit} />I have {videos.length} videos. */}
      <SearchBar onFormSubmit={search} />I have {videos.length} videos.
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={onVideoSelect} videos={videos} /> */}
            {/* <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            /> */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

// componentDidMount() {
//   this.onTermSubmit('buildings');
// }

// onTermSubmit = async (term) => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term
//     },
//   });

//   console.log(response.data.items);
//   this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
// };

// onVideoSelect = (video) => {
//   console.log("From the App = ", video);
//   this.setState({ selectedVideo: video });
// };

// render() {
// return (
//   <div className="ui container">
//     <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
//     {this.state.videos.length} videos.
//     <div className="ui grid">
//       <div className="ui row">
//         <div className="eleven wide column">
//           <VideoDetail video={this.state.selectedVideo} />
//         </div>
//         <div className="five wide column">
//           <VideoList
//             onVideoSelect={this.onVideoSelect}
//             videos={this.state.videos}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
// }

export default App;
