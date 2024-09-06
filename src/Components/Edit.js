import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [id,setId]=useState(0);
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));
      setAge(localStorage.getItem('age'));
      setEmail(localStorage.getItem('email'));
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://66d74360006bfbe2e65057d0.mockapi.io/crud/${id}`,{
            e_name:name,
            e_age:age,
            e_email:email

        }).then(()=>{
           navigate('/');
        }).catch((error)=>{
          console.log(error)
        });
    }
  return (
    <>
    <div className='row'>
     <div className='col-md-4'>
     <div className='mb-2 mt-2'>
            <Link to='/'>
            <button className='btn btn-primary'>Read Data</button>
            </Link>

     </div>
       <div className='bg-primary p-4 text-center'>
         <h1>Update Data</h1>

       </div>
     <form onSubmit={handleUpdate} >
        <div className='form-group'> 
          <label>Enter name:</label>
          <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
        </div>
        <div className='form-group'> 
          <label>Enter age:</label>
          <input type='number' placeholder='Age'value={age} onChange={(e)=>setAge(e.target.value)} className='form-control' />
        </div>
        <div className='form-group'> 
          <label>Enter email:</label>
          <input type='email' placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
        </div>
        <br/>
        <div className='d-grid '>
        <input type='submit' value='Update' className='btn btn-primary'/>
        </div>

     </form>
     
     </div>

    </div>
</>
  )
}

export default Edit
