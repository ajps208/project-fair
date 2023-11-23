import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { userProjectApi } from '../services/allAPI'
import { addProjectResponsContext } from '../Context.js/ContextShare'
import { useContext } from 'react'

function Myprojects() {
  const[addProjectResponse,setAddProjectResponse]=useContext(addProjectResponsContext)

    const [userProjects,setUserProjects]=useState([])
    const getUserProjects=async()=>{
        if(sessionStorage.getItem('token')){
            const token=sessionStorage.getItem("token")
            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const result=await userProjectApi(reqHeader)
            if(result.status===200){
              setUserProjects(result.data)
            }else{
              console.log(result);
            }
        }
    }

    useEffect(()=>{getUserProjects()},[])
  return (
    <div className='card shadow p-3 mt-3'>
        <div className="d-flex">
            <h3>My Projects</h3>
            <div className="ms-auto"><AddProject/></div>
        </div>
        <div className="mt-4">
           {userProjects?.length>0 ?userProjects.map(projects=>(<div className="border d-flex align-items-center rounded p-2">
                <h5>{projects.title}</h5>
                <div className="icons ms-auto">
                    <button className='btn'><i className="fa-solid fa-pen-to-square fa-2x"></i></button><a href={`${projects.github}`} target='_blank'></a>
                    <a className='btn' href={`${projects.github}`} target='_blank'><i className="fa-brands fa-github fa-2x"></i></a>
                    <button className='btn'><i className="fa-solid fa-trash fa-2x"></i></button>
                </div>
            </div>)):            <p className="text-danger fw-bolder fs-3">No Projects uploaded yet!!!!</p>
}
        </div>
    </div>
  )
}

export default Myprojects