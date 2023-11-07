import React from 'react'
import { Link } from 'react-router-dom'

function Header({insideDashBoard}) {
  return (
    <>
    <div className='postion-fixed top-0 w-100 d-flex ' style={{backgroundColor:"#90ee90",height:"80px"}}>
      <Link to={'/'} style={{textDecoration:"none",color:"white"}}>  <h1 className='ms-5 mt-3 text-light' > <i class="fa-solid fa-laptop-file"></i> Project-Fair</h1></Link>
{ insideDashBoard &&     <button className='btn btn-link ms-auto text-decoration-none text-primary fw-bolder fs-5 '>Logout <i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></button>
}    </div>

    </>
  )
}

export default Header