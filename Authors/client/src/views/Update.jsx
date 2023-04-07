import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';


const UpdateAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);

            })
            .catch(err => console.error(err));
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => navigate('/'))
            .catch((err) => {
                if (err.response && err.response.data) {
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = Object.keys(errorResponse).map(
                        (key) => errorResponse[key].message
                    ); // Get an array of error messages
                    // Set Errors
                    setErrors(errorArr);
                }
            });
    };

    return (
        <div className='card mt-5'>
            <h2>Favorite Authors</h2>
            <h5 className='text-success'>Edit this Author</h5>
            {errors.map((err, index) => (
                <p className='text-danger' key={index}>{err}</p>
            ))}
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name: </label><br />
                    <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </p>
                <span>  <Link to='/' className='btn btn-primary'>Cancel</Link> </span>
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default UpdateAuthor;
