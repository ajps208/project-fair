import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);

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
            <input id='profile' type="file" style={{ display: "none" }} />
            <img
              width={"200px"}
              height={"200px"}
              className='rounded-circle'
              src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"
              alt=""
            />
          </label>
          <div className="mt-3">
            <input type="text" className='form-control' placeholder='Github' />
          </div>
          <div className="mt-3">
            <input type="text" className='form-control' placeholder='LinkedIn' />
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
