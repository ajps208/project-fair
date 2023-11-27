import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Context.js/TokenAuth'

function Header({insideDashBoard}) {
  const{isAuthorizes, setIsAuthorizes}=useContext(tokenAuthorisationContext)

   const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthorizes(false)
    navigate("/")
  }
  return (
    <>
    <div className='postion-fixed top-0 w-100 d-flex ' style={{backgroundColor:"#90ee90",height:"80px"}}>
      <Link to={'/'} style={{textDecoration:"none",color:"white"}}>  <h1 className='ms-5 mt-3 text-light' > <i class="fa-solid fa-laptop-file"></i> Project-Fair</h1></Link>
{ insideDashBoard &&     <button onClick={handleLogout} className='btn btn-link ms-auto text-decoration-none text-primary fw-bolder fs-5  '>Logout <i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></button>
}    </div>

    </>
  )
}

export default Header