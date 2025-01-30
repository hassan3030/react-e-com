
import  MainHeader  from "./MainHeader";
import Search from "./Search";
import Navbar from "./Navbar"; 
import { useState } from "react";
import "./header.css";
const Header = () => {
  const [togle , setTogle] = useState(true)
  return (
    <>
   <MainHeader togle={togle} setTogle={setTogle} />
     <Search/>
      <Navbar togle={togle} setTogle={setTogle} />
    </>
  );
};

export default Header;
