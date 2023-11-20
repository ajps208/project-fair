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