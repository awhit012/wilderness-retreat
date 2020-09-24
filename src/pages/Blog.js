import React, { Component } from 'react';
import ReactPlayer from "react-player"
import Button from '@material-ui/core/Button';

const yturl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFIvAwDouMS3OjBPU16uF7w&maxResults=5&order=date&type=video&key=AIzaSyBDy0xFYYiEuB9O3-nZ3ZvNwXEC9Hqz4wM"
class Blog extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    fetch(yturl)
      .then(response => response.json())
      .then(data => this.setState({ videos: data.items }))
    }

  render() {
    return (
    <div>
    	<h1>Latest Videos</h1>
    	{this.state.videos.map((video, index) => (
	    	<div key={index} >
	    		<h2>{video.snippet.title}</h2>
					<br></br>
					<ReactPlayer
						className="react-player"
					  url={"https://www.youtube.com/watch?v=" + video.id.videoId }
					/>
					<br></br>
					<br></br>
	    	</div>	
    		))}
      <a target="_blank" 
      	href="https://www.youtube.com/channel/UCFIvAwDouMS3OjBPU16uF7w">
      	<Button size="large" color="primary" variant="outlined">
      		Go To YouTube Channel
      	</Button>
      </a>
    	
    </div>	
    );
  }
}

export default Blog;



