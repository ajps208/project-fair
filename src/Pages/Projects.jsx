import React from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
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
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;
