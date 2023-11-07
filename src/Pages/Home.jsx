import React from 'react'
import { Row,Col } from 'react-bootstrap'
import title from'../Assets/title.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    {/*langing page */}
    <div style={{width:"100%",height:"100vh",backgroundColor:"#90ee90"}} className='container-fluid rounded '>
      <Row className="align-items-center p-5">
      <Col sm={12} md={6}>
        <h1 style={{fontSize:"80px"}} className='fw-bolder text-light'>
        <i class="fa-solid fa-laptop-file"></i>   Project-Fair
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam est accusamus nemo nobis, unde exercitationem, optio maiores eligendi natus similique delectus, temporibus at excepturi libero officiis consequuntur voluptas fugiat repellat.</p>
        <Link to={'/login'} className="btn btn-warning">Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
          
      </Col>
      <Col sm={12} md={6}>
        <img width={"500px"} style={{marginTop:"100px",marginLeft:"60px"}}  src={title} alt="" />

      </Col>
      </Row>
    </div>
    {/* all projects */}
    <div className="all-projects mt-5 mb-5">
      <h1 className="text-center">Explore our Projects</h1>
      <marquee scrollAmount={15}>
        <Row className='mt-3'>
          <Col sm={12} md={6} lg={4}>
              <div style={{width:"500px"}}>
              <ProjectCard/>
              </div>
          </Col>
         
        </Row>
      </marquee>
      <div className="text-center mt-5">
        <Link to={'/projects'}>View more Projects </Link>
      </div>
    </div>
    </>
  )
}

export default Home