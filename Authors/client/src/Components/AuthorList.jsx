import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// 1. call API on laod: axios
// 2. Link: Link

const AuthorList = (props) => {
    const { removeFromDom, authors } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='card mt-5'>
            <h2>Favorite Authors</h2>
            <Link to={'/new'}>Add an author</Link> <br></br>
            <h5 className='text-success'>We have quotes by: </h5>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th colSpan={2}>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, id) =>
                        <tr key={id}>
                            <td>
                                {author.name}
                            </td>
                                <td> <Link to={`/edit/${author._id}`} className='btn btn-warning'>Edit</Link> </td>
                            <td>   <button className='btn btn-danger' onClick={(e) => { deleteAuthor(author._id) }}>Delete</button> </td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;
