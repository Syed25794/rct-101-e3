import React from "react";
import Products from "../components/Products/Products";
import {Login} from './Login';

export const Home = () => {
  const [show,setShow]=React.useState(true);
  const handleShow=()=>{
    setShow(!show);
  }
  return (
  <div>
  {show ? <Login handleProduct={handleShow} /> :  <Products handleShow={handleShow}/>}
  </div>
  )
};

