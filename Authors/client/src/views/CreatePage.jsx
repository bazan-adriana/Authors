import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function CreatePage(props) {
    // keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    // Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    // handler when the form is submitted
    const onSubmitHandler = (e) => {
        // prevent default behavior of the submit
        e.preventDefault();
        // Send a post request to our API to create an Author
        axios.post("http://localhost:8000/api/authors", {
            name,
        })
            .then((res) => {
                navigate('/');
            }) // If successful, do something with the response.
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
            <h5 className='text-success'>Add a new Author:</h5>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => (
                    <p className='text-danger' key={index}>{err}</p>
                ))}
                <p>
                    <label>Name: </label> <br></br>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </p>
                <span>  <Link to='/' className='btn btn-primary'>Cancel</Link> </span>
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
    );
}
