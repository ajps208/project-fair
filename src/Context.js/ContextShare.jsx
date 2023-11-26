import React, { createContext, useState } from "react";

export const addProjectResponsContext = createContext();
export const editProjectResponsContext = createContext();

function ContextShare({ children }) {
    const [addProjectResponse,setAddProjectResponse]=useState({})
    const [editProjectResponse,setEditProjectResponse]=useState({})
  return (
    <>
      <addProjectResponsContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        <editProjectResponsContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
        {children}
      </editProjectResponsContext.Provider>
      </addProjectResponsContext.Provider>
    </>
  );
}

export default ContextShare;
