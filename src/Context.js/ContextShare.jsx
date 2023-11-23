import React, { createContext, useState } from "react";

export const addProjectResponsContext = createContext();

function ContextShare({ children }) {
    const [addProjectResponse,setAddProjectResponse]=useState({})
  return (
    <>
      <addProjectResponsContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        {children}
      </addProjectResponsContext.Provider>
    </>
  );
}

export default ContextShare;
