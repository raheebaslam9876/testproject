import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from "react";
import './App.css';
import Unsplash from './api/Unsplash'
import Searchbar from './Searchbar'
import React from 'react'
import Imagelist from './Imagelist'
import './Imagelist.css'
import Videolist from './Videolist'
import VideoDetail from './VideoDetail'
import Usevideo from './hooks/Usevideo'
const App = () => {
  const [selectedvideo, setselectedvideo] = useState(null)
  const [video, selectedsearchvideo] = Usevideo('buildings')
  // setselectedvideo(res.data.items[0])
  useEffect(() => {
    setselectedvideo(video[0])
    console.log(video)
  }, [video])

  // const onVideoSelect = (video) => {
  //   setselectedvideo(video);
  // }
  return (
    // <>
    //   <div className="ui container" >

    //     <Searchbar onSubmit={VideoSubmit} />
    //     <div className="img-list">
    //       <Videolist onVideoSelect={onVideoSelect} videodata={video} />
    //       {/* <Imagelist image3={this.state.img} /> */}
    //     </div>
    //   </div>
    // </>
    <>
      <div className="ui container">
        {JSON.stringify(video, null, 2)}
        <Searchbar onSubmit={selectedsearchvideo} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedvideo} />
            </div>
            <div className="five wide column">
              <Videolist onVideoSelect={setselectedvideo} videodata={video} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

// class App extends React.Component {
//   // state = { video: [], selectedvideo: null }
//   // FormSubmit = async (term) => {
//   //   const response = await axios.get('https://api.unsplash.com/search/photos', {
//   //     params: { query: term },
//   //     headers: {
//   //       Authorization: 'Client-ID 12mh9WFZ9SBy1TkzsF3At0iieHfjmQxIEMwcROmnX5w'
//   //     }
//   //   })
//   //   // .then((res) => console.log(res))
//   //   // Alternate method with Async Await
//   //   this.setState({ img: response.data.results })
//   // }

//   // onVideoSelect = (video) => {
//   //   console.log('This is video', video)
//   // }
//   // // this.setState({
//   //   video: res.data.items,
//   //   selectedvideo: res.data.items[0]
//   // })
//   render() {
//     return (
//       <>
//         <div className="ui container" >

//           <Searchbar onSubmit={this.VideoSubmit} />
//           <div className="img-list">
//             <Videolist onVideoSelect={this.onVideoSelect} videodata={this.state.video} />
//             {/* <Imagelist image3={this.state.img} /> */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }


export default App;
