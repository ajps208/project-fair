import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")

}

// login
export const loginrAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")

}

// add projects
export const addProjectApi=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)

}

// homeproject
export const homeProjectApi=async()=>{
    return await commonAPI("GET",`${BASE_URL}/user/homeprojects`,"","")}

// allprojects
export const allProjectsApi=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all?search=${searchKey}`,"",reqHeader)}

// userproject
export const userProjectApi=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allprojects`,"",reqHeader)}

 // edit project
 export const editProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
 }

 // delete project
 export const deleteProjectAPI=async(projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
 }

 // upadte user
 export const editUserAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
 }