import React,{useState} from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import project1 from '../Assets/project1.png'

function ProjectCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={project1} />
      <Card.Body>
        <Card.Title className='fw-bolder'>Media Player</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img style={{height:"200px"}} className='img-fluid' src={project1} alt="" />
            </Col>
            <Col>
            <h2>Project Title</h2>
            <p>Project Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis quod nobis, blanditiis ipsum quis cupiditate ut eos in repellendus nemo adipisci veniam non explicabo fugiat vitae accusantium labore. Sunt!</p>
            <p>Languages used: <span className='fw-bolder'>HTMS,CSS,React</span></p>
            
            </Col>
          </Row>
          <div className="mt-3">
              <a className='me-3 btn' href="https://github.com/ajps208/media-player"blank target='_'><i class="fa-brands fa-github fa-2x"></i></a>
              <a className='me-3 btn' href="https://vedioplayerapp-ajithps.netlify.app"blank target='_'><i class="fa-solid fa-link fa-2x"></i></a>

            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard