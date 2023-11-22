import React,{useState} from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import project1 from '../Assets/project1.png'
import { BASE_URL } from '../services/baseurl';

function ProjectCard({project}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   {project && <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img style={{height:"200px"}} variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:project1} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{project.title}</Card.Title>
      </Card.Body>
    </Card>}
    <Modal size='lg' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img style={{height:"200px"}} className='img-fluid' src={project?`${BASE_URL}/uploads/${project.projectImage}`:project1}  alt="" />
            </Col>
            <Col>
            <h2>{project.title}</h2>
            <p>{project.overview}</p>
            <p>Languages used: <span className='fw-bolder'>{project.languages}</span></p>
            
            </Col>
          </Row>
          <div className="mt-3">
              <a className='me-3 btn' href={project.github} blank target='_'><i class="fa-brands fa-github fa-2x"></i></a>
              <a className='me-3 btn' href={project.website} blank target='_'><i class="fa-solid fa-link fa-2x"></i></a>

            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard