import React, { Component } from 'react';
import Modalities from './Modalities';
import ReactPlayer from "react-player"
import './About.css';

class About extends Component {
  render() {
    return (
    <div>
    	<h1>My Story</h1>
    	<ReactPlayer
    		className="react-player"
        url="https://www.youtube.com/watch?v=-Lbgj7rbZhg"
    	/>
      <p className="container">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Sem et tortor consequat id porta nibh. Neque gravida in fermentum et. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sit amet venenatis urna cursus eget nunc. Faucibus turpis in eu mi bibendum neque egestas. Luctus venenatis lectus magna fringilla urna porttitor. Amet est placerat in egestas erat imperdiet sed euismod. Platea dictumst quisque sagittis purus sit amet volutpat. Consequat id porta nibh venenatis cras. Commodo ullamcorper a lacus vestibulum sed. In nulla posuere sollicitudin aliquam ultrices sagittis. Diam donec adipiscing tristique risus. Condimentum lacinia quis vel eros.
      	
			</p>
			<p className="container">
				Feugiat pretium nibh ipsum consequat nisl. Arcu ac tortor dignissim convallis aenean et tortor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. At elementum eu facilisis sed odio morbi quis commodo odio. Diam ut venenatis tellus in metus vulputate. Aliquam nulla facilisi cras fermentum odio eu. In pellentesque massa placerat duis ultricies. Convallis tellus id interdum velit laoreet. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. At volutpat diam ut venenatis tellus in metus. Neque aliquam vestibulum morbi blandit cursus risus. Diam donec adipiscing tristique risus. Proin gravida hendrerit lectus a. Egestas maecenas pharetra convallis posuere. Justo donec enim diam vulputate ut. Pellentesque massa placerat duis ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sagittis purus sit amet volutpat consequat mauris nunc congue.
			</p>
			<p className="container">
				Velit egestas dui id ornare arcu odio ut sem. Eu facilisis sed odio morbi quis commodo. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Congue nisi vitae suscipit tellus. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Id porta nibh venenatis cras. Eget nullam non nisi est sit amet facilisis. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Feugiat nibh sed pulvinar proin gravida.
			</p>
			<p className="container">
				Eu facilisis sed odio morbi quis commodo. Blandit massa enim nec dui nunc. Euismod lacinia at quis risus sed vulputate. Nec dui nunc mattis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Blandit massa enim nec dui nunc mattis enim ut tellus. Consequat interdum varius sit amet mattis vulputate enim. Sem nulla pharetra diam sit amet nisl suscipit. Lorem ipsum dolor sit amet consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Tortor pretium viverra suspendisse potenti nullam. Scelerisque eu ultrices vitae auctor eu augue. Neque ornare aenean euismod elementum nisi quis eleifend. Amet cursus sit amet dictum sit amet justo donec enim.
			</p>
			<p className="container">
					Vitae auctor eu augue ut lectus. Urna nunc id cursus metus aliquam eleifend mi. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Senectus et netus et malesuada fames ac turpis egestas. Cursus euismod quis viverra nibh cras pulvinar mattis. Ac ut consequat semper viverra. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Massa sapien faucibus et molestie ac feugiat sed lectus. In tellus integer feugiat scelerisque varius morbi enim. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Bibendum arcu vitae elementum curabitur vitae. Elit eget gravida cum sociis natoque. Consequat interdum varius sit amet mattis vulputate. Viverra nam libero justo laoreet sit amet cursus sit amet. Id volutpat lacus laoreet non. Morbi non arcu risus quis varius quam quisque id diam.
			</p>
			<p className="container">
				Thanks for your visit!
			</p>
			<Modalities/>
    </div>	
    );
  }
}

export default About;



