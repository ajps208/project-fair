import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseurl';

function Profile() {
  const [open, setOpen] = useState(false);
  const[userProfile,setUserProfile]=useState({
    username:"",email:"",password:"",profile:"",github:"",linkedin:""
  })
  const[existingImage,setExistingImage]=useState("") 
  const[preview,setPreview]=useState("") 

  useEffect(()=>{
    const user=JSON.parse(sessionStorage.getItem("existingUser"))

    if(user.profile){
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
      setExistingImage(user.profile)
    }else{
      setExistingImage("")
    }
  },[])
  useEffect(()=>{
   if(userProfile.profile){
    setPreview(URL.createObjectURL(userProfile.profile))
   }else{
    setPreview("")
   }
  },[userProfile.profile])
  return (
    <div className='mt-5'>
      <div className="d-flex border p-2 justify-content-between">
        <h2>Profile</h2>
        <button className='btn btn-outline-info' onClick={() => setOpen(!open)}>
          <i className="fa fa-angle-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div className="row d-flex justify-content-center mt-3">
          <label className='text-center' htmlFor="profile">
            <input id='profile' type="file" style={{ display: "none" }}  onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})}/>
            <img
              width={"200px"}
              height={"200px"}
              className='rounded-circle'
              src={preview?preview:`${BASE_URL}/uploads/${existingImage}`}
              alt="upload picture"
            />
          </label>
          <div className="mt-3">
            <input type="text" className='form-control' placeholder='Github' value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})} />
          </div>
          <div className="mt-3">
            <input type="text" className='form-control' placeholder='LinkedIn'  value={userProfile.linkedin} onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} />
          </div>
          <div className="mt-3 d-grid">
            <button className='btn btn-warning'>Update</button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Profile;
