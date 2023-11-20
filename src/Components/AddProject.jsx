import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../services/allAPI';

function AddProject() {
    const [show, setShow] = useState(false);
    const[projectDetails,setProjectDetails]=useState({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })
    const[preview,setPreview]=useState("")
    const[token,setToken]=useState("")
    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }

    },[projectDetails.projectImage])
    // console.log(projectDetails);

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))

      }else{
        setToken("")
      }
    },[])

    const handleClose = () => {setShow(false)
     setProjectDetails({ title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
    setPreview("")};
    const handleShow = () => setShow(true);

    const handleAdd=async(e)=>{
      e.preventDefault()
      const{title,languages,overview,github,website,projectImage}=projectDetails
      if(!title||!languages||!overview||!github||!website||!projectImage){
        toast.info("Please fill thr form completely!!!")
      }else{
        const reqBody=new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("projectImage",projectImage)
        let reqHeader;
        if(token){
          reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const result=await addProjectApi(reqBody,reqHeader)
        console.log(result);
        if(result.status===200){
          console.log(result.data);
          handleClose()
          alert("project added")
        }else{
          console.log(result);
          console.log(result.response.data);
        }}

      }

    }
  return (
    <>
         <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className="col-lg-6">
             <label>
                <input type="file"  style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
                    <img className='img-fluid' src={preview?preview:"https://static.thenounproject.com/png/1269202-200.png"} alt="" />
    
            </label>            </div>
            <div className="col-lg-6">
                <div className="mb-3"><input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} /></div>
                <div className="mb-3"><input type="text" className='form-control' placeholder='Language Used' value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/></div>
                <div className="mb-3"><input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/></div>
                <div className="mb-3"><input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/></div>
                <div className="mb-3"><input type="text" className='form-control' placeholder='Project Overview'value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} /></div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </>
  )
}

export default AddProject