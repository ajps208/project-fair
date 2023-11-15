import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'

function Dashboard() {
  const[username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)

    }

  },[])
  return (
    <>
      <Header insideDashBoard/>
      <Row style={{marginTop:"50px",padding:"10px"}} className='container-fluid'>
        <Col sm={12} md={8}>
          <h1 className='mb-3'>Welcome <span className='text-warning'>{username}</span></h1>
        <Myprojects/>
        </Col>
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard