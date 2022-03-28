import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";


const Links =styled(Link)`
 margin:50px;
 color:green
`;

export const Navbar = () => {
  return (
    <div>
      <Links to ="/">Home</Links>
      <Links to ="/Register">Register</Links>
      <Links to="/Login">Login</Links>
      <Links to="/Products">Products</Links>
    </div>
  )
}