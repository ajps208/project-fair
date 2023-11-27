import React, { useState } from "react";
import { createContext } from "react";

export const tokenAuthorisationContext = createContext();

function TokenAuth({ children }) {
  const [isAuthorizes, setIsAuthorizes] = useState(false);
  return (
    <>
      <tokenAuthorisationContext.Provider value={{isAuthorizes, setIsAuthorizes}}>
        {children}
     </tokenAuthorisationContext.Provider>
    </>
  );
}

export default TokenAuth;
