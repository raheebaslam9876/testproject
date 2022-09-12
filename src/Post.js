import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


function Post() {
    const [myData, setmyData] = useState([]);
    const [isError, setmyError] = useState(" ");
    // eslint-disable-next-line no-undef
    useEffect(() => {
        return () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => setmyData(res.data))
                .catch((error) => setmyError(error.message));
        };
    }, [])
    return (
        <BrowserRouter>
            <>
                <h1>Tutorial</h1>
                {isError != " " && <h2>{isError}</h2>}
                {myData.map((post) => {
                    const { id, title, body } = post;
                    return (
                        <div className='card' key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                    );
                })}
            </>
        </BrowserRouter>
    );
}

export default Post;
