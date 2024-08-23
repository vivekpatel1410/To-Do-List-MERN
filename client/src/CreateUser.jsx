import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9090/createUser", { name, email, phone })
            .then(result => {
                setSuccess('User created successfully!');
                console.log(result);
                setTimeout(() => navigate('/'), 2000);
            })
            .catch(err => {
                setError('Failed to create user. Please try again.');
                console.log(err);
                setTimeout(() => navigate('/'), 2000);
            });
    }
    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={Submit}>
                    <center><i><h1>Add Users</h1></i></center>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Phone</label>
                        <input type='text' placeholder='Enter Phone' className='form-control' onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;