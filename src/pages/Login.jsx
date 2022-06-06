import React, { useState } from "react";

export const Login = ({handleProduct}) => {
  const [query1,setQuery1]=useState("");
  const [query2,setQuery2]=useState("");
  return (
    <div >
    <input value={query1} data-cy="login-email"  onChange={(e)=> setQuery1(e.target.value)} />
      <div>
      <input value={query2} onChange={(target)=>setQuery2(target.value)} data-cy="login-password" />
      </div>
      <div><button data-cy="login-submit" onClick={handleProduct}>Login</button></div>
    </div>
  );
};

