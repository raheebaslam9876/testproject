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
import youtube from './api/youtube'
class App extends React.Component {
  state = { video: [], selectedvideo: null }
  // FormSubmit = async (term) => {
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 12mh9WFZ9SBy1TkzsF3At0iieHfjmQxIEMwcROmnX5w'
  //     }
  //   })
  //   // .then((res) => console.log(res))
  //   // Alternate method with Async Await
  //   this.setState({ img: response.data.results })
  // }
  VideoSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term }
    })
    this.setState({ video: res.data.items })
  }
  onVideoSelect = (video) => {
    console.log('This is video', video)
  }

  render() {
    return (
      <>
        <div className="ui container" >

          <Searchbar onSubmit={this.VideoSubmit} />
          <div className="img-list">
            <Videolist onVideoSelect={this.onVideoSelect} videodata={this.state.video} />
            {/* <Imagelist image3={this.state.img} /> */}
          </div>
        </div>
      </>
    );
  }
}


export default App;
