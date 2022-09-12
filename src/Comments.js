import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from "react";
import './App.css';


function Comments() {
    const [myData, setmyData] = useState([]);
    const [isError, setmyError] = useState(" ");
    // eslint-disable-next-line no-undef
    useEffect(() => {
        return () => {
            axios.get("https://jsonplaceholder.typicode.com/comments")
                .then((res) => setmyData(res.data));
        };
    }, [])
    return (
        <>
            <h1>Tutorial</h1>
            {myData.map((post) => {
                const { id, name, email, body } = post;
                return (
                    <div className='card' key={id}>
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>
                );
            })}
        </>

    );
}

export default Comments;
