import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import title from'../Assets/title.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectApi } from '../services/allAPI'
function Home() {
  const[loggedin,setLoggedin]=useState(false)
  const [homeprojects,setHomeprojects]=useState([])
  const getHomeProjects=async()=>{
    const result=await homeProjectApi()
    if(result.status===200){
      setHomeprojects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }
  // console.log(homeprojects);
  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setLoggedin(true)
  }else{
    setLoggedin(false)
  }
  // /apicall
  getHomeProjects()
  },[])
  
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
        {!loggedin?<Link to={'/login'} className="btn btn-warning">Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:
        <Link to={'/dashboard'} className="btn btn-warning">Manage your Projects <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>}
          
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
         { homeprojects?.length>0?homeprojects.map(project=>(<Col sm={12} md={6} lg={4}>
              <div style={{width:"500px"}}>
              <ProjectCard project={project}/>
              </div>
          </Col>)):null}
         
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