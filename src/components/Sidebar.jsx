import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import './Sidebar.css';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

 

  const menuItem1 = [
    {
      path: "what/01",
      name: "01 What is it?"
    },
    {
      path: "Why/02",
      name: "02 Why do you need it?"
    },
    {
      path: "/",
      name: "03 Inputs"
    },
    {
      path: "/",
      name: "04 Deliverable(s)"
    },
    {
      path: "/",
      name: "05 Key considerations"
    },
    {
      path: "/",
      name: "06 Best practices"
    },
    {
      path: "/",
      name: "07 Risks & mitigations"
    },
    {
      path: "/",
      name: "08 Assets & tools"
    },
    {
      path: "/",
      name: "09 Learn more"
    }
  ]

  return (
    <div className="container1">
      <div style={{ width: isOpen ? "260px" : "100px"}} className="sidebarr">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "80px" : "0px", cursor: 'pointer', paddingLeft: isOpen ? '110px' : '23px' }} onClick={toggle}>
            {isOpen ? <HiOutlineChevronDoubleLeft /> : <TfiPlus />}
          </div>
        </div>
        {
          menuItem1.map((item, index) => (
            <NavLink to={item.path} key={index} className="link1 menuItem1" activeClassName="active">
              <div className="text_link" style={{textDecoration:'none !important'}}>
                {isOpen ? item.name : item.name.slice(0, 2)}
              </div>
            </NavLink>
            
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
