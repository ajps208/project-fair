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
export const allProjectsApi=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all`,"",reqHeader)}