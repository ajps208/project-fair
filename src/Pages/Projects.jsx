import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import { allProjectsApi } from "../services/allAPI";

function Projects() {
const [allProjects,setAllProjects]=useState([])
const getAllProjects=async()=>{
  if(sessionStorage.getItem("token")){
    const token=sessionStorage.getItem("token")
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await allProjectsApi(reqHeader)
    if(result.status===200){
      setAllProjects(result.data)
    }else{
      console.log(result);
    }
  }
}
useEffect(() => {
  getAllProjects()
}, [])

  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="projects">
        <h2 className="text-center mb-5">All Projects</h2>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div style={{position:"relative"}} className="d-flex border w-50 rounded">
            <input className="form-control" placeholder="Search project by technology used" type="text" />
            <i style={{position:"absolute",right:"10px"}} className="mt-2 fa-solid fa-magnifying-glass "></i>
          </div>
        </div>
        <Row className="mt-5 container-fluid">
        { allProjects?.length>0?allProjects.map(project=>( <Col sm={12} md={6} lg={4}>
            <ProjectCard project={project} />
          </Col>)):<p className="text-danger text-center">Please Login !!!</p>}
        </Row>
      </div>
    </>
  );
}

export default Projects;
