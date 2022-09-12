import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from "react";
import './App.css';
import Unsplash from './api/Unsplash'
import Searchbar from './Searchbar'
import React from 'react'
import Imagelist from './Imagelist'
import './Imagelist.css'
class App extends React.Component {
  state = { img: [] }
  FormSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 12mh9WFZ9SBy1TkzsF3At0iieHfjmQxIEMwcROmnX5w'
      }
    })
    // .then((res) => console.log(res))
    // Alternate method with Async Await
    this.setState({ img: response.data.results })
  }

  render() {
    return (
      <>
        <div className="ui container" >

          <Searchbar onSubmit={this.FormSubmit} />
          <div className="img-list">
            <Imagelist image3={this.state.img} />
          </div>
        </div>
      </>
    );
  }
}


export default App;
