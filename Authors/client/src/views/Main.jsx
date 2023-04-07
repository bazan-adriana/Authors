import React, { useEffect, useState } from 'react';
import AuthorList from '../Components/AuthorList';
import axios from 'axios';

// 1. call API on laod: axios, useEffect
// 2. variable change: useState

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };


    return (
        <div>
            {authors?
            <AuthorList authors={authors} removeFromDom={removeFromDom} />: <h1>Loading....</h1>}
        </div>
    )

}

export default Main;