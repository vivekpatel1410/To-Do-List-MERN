import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9090/getUser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setPhone(result.data.phone)
            })
            .catch(err => console.log(err))
    }, [id])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:9090/updateUser/" + id, { name, email, phone })
            .then(result => {
                setSuccess('Update successfully!');
                console.log(result);
                setTimeout(() => navigate('/'), 2000);
            })
            .catch(err => {
                setError('Update Failed!');
                console.log(err);
                setTimeout(() => navigate('/'), 2000);
            });
    }
    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={Update}>
                    <center><i><h2>Update Users</h2></i></center>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='text' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Phone</label>
                        <input type='text' placeholder='Enter Phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;