import React, { useEffect, useState } from 'react';
import AddProject from './AddProject';
import { deleteProjectAPI, userProjectApi } from '../services/allAPI';
import { addProjectResponsContext, editProjectResponsContext } from '../Context.js/ContextShare';
import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import EditProject from './EditProject';
import { toast } from 'react-toastify';

function Myprojects() {
  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponsContext);
  const{editProjectResponse,setEditProjectResponse}=useContext(editProjectResponsContext)


  const [userProjects, setUserProjects] = useState([]);

  const getUserProjects = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await userProjectApi(reqHeader);
      if (result.status === 200) {
        setUserProjects(result.data);
      } else {
        console.log(result);
      }
    }
  };

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse,editProjectResponse]);
  const handleDelete=async(id)=>{
    const token=sessionStorage.getItem("token")
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await deleteProjectAPI(id,reqHeader)
    if(result.status===200){
      getUserProjects()
    }else{
      toast.error(result.response.data)
    }
  }
  return (
    <div className="card shadow p-3 mt-3">
      <div className="d-flex">
        <h3>My Projects</h3>
        <div className="ms-auto">
          <AddProject />
        </div>
      </div>
      {addProjectResponse.title ? <Alert className='bg-success' dismissible >`${addProjectResponse.title} added successfully`</Alert>:null}
      <div className="mt-4">
        {userProjects?.length > 0 ? (
          userProjects.map((projects) => (
            <div className="border d-flex align-items-center rounded p-2" key={projects.id}>
              <h5>{projects.title}</h5>
              <div className="icons ms-auto d-flex">
               <EditProject project={projects}/>
                <a href={`${projects.github}`} target="_blank" className="btn">
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>
                <button className="btn" onClick={()=>handleDelete(projects._id)}>
                  <i className="fa-solid fa-trash fa-2x"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger fw-bolder fs-3">No Projects uploaded yet!!!!</p>
        )}
      </div>
    </div>
  );
}

export default Myprojects;
