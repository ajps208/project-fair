import React from 'react'
import { Link } from 'react-router-dom'
import logimg from '../Assets/loginimg.png'
import { Form } from 'react-bootstrap'

function Auth({ register }) {
  const isRegisterForm = register ? true : false
  return (
    <div style={{ width: "100%", height: "100vh" }} className='d-flex align-items-center justify-content-center'>
      <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
        </Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col lg-6">
              <img src={logimg} alt="" className='rounded-start w-100' />
            </div>
            <div className="col lg-6">
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-bolder text-light mt-2'>
                  <i className="fa-solid fa-laptop-file"></i> Project-Fair
                </h1>
                <h5 className="fw-bolder mt-4 pb-3 text-light">
                  {isRegisterForm ? 'Sign up to your Account' : 'Sign in to your Account'}
                </h5>
                <Form className='text-light w-100'>
                  {isRegisterForm && (
                    <>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                        <Form.Control type="email" placeholder="UserName" />
                      </Form.Group>
                    
                    </>
                  )}
                       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="email" placeholder="Enter Email Id" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="email" placeholder="Enter Password" />
                   </Form.Group>
                   {
                    isRegisterForm?
                    <div>
                        <button className='btn btn-light mb-2'>Register</button>
                        <p>Already have account?clicked here to <Link to={'/login'}>Login</Link></p>
                    </div>:
                     <div>
                     <button className='btn btn-light mb-2'>Login</button>
                     <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                 </div>
                   }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
