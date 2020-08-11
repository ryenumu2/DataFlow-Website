import React,{ Dropdown, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { SignOut } from '../store/modules/auth/actions/authAction';
import Default from '../Assets/default.png';
import './Navigation.css';
//import DropdownContents from './DropdownContents.js';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const currentState = useSelector((state) => state);
  
  const { isAuthenticated, currentUser } = currentState.Auth;

  const dispatch = useDispatch()

  const logoutUser  = () => dispatch(SignOut());



  let imagePreview = null;
  if(currentUser && currentUser.avatar_path){
    imagePreview = (<img className="img_style_nav" src={currentUser.avatar_path} alt="profile 1"/>);
  } else {
    imagePreview = (<img className="img_style_nav" src={Default} alt="profile 2"/>);
  }

  const logout = (e) => {
    e.preventDefault()
    logoutUser()
  }

  const userProfile = isAuthenticated ?  `/profile/${currentState.Auth.currentUser.id}` : ""

  const SignedInLinks = (
              <React.Fragment>

                <UncontrolledDropdown nav inNavbar style={{marginRight: "20px",
                 }}>
                  <DropdownToggle nav caret style={{color: '#000', marginTop: "1px",
                 }} >
                    Learn
                  </DropdownToggle>

                  {/* start of navbar to be copied and pasted to SignedOutLinks */}

                  <DropdownMenu right>
                    <DropdownItem disabled>
                      <NavItem className="mt-2">
                        Linked Lists
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/singlylist'> Singly Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    
                    <DropdownItem>
                      <NavItem>
                        <Link to='/doublylist'> Doubly Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleimplement'> Singly Linked List Implementation </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview1'> Singly-Linked lists: Interview problem 1: Merge two sorted linked lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview2'> Singly-Linked lists: Interview problem 2: Reverse a Sub List in Python </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview3'> Singly-Linked lists: Interview problem 3: Determine if Linked List has Cycle </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview4'> Singly-Linked lists: Interview problem 4: Find Intersection of Two Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem divider />
                    <DropdownItem disabled>
                      <NavItem className="mt-2">
                        Developer essentials
                      </NavItem>
                    </DropdownItem>

                    <UncontrolledDropdown nav inNavbar style={{marginRight: "20px",
                 }}>

                    <DropdownToggle nav caret style={{color: '#000', marginTop: "1px",
                 }} >
                    React (JS)
                  </DropdownToggle>
                  <DropdownMenu left>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/funcvscomp'> The War of Functional vs Class Components: why Functional is better </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/props'> Props </Link> 
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                    
                    <DropdownItem divider />
                    <DropdownItem>
                      <a onClick={logout}>Logout</a>
                    </DropdownItem>
                  </DropdownMenu>


                </UncontrolledDropdown>

                  <NavItem className="mt-2" style={{marginRight: "15px" }}>
                    <NavLink to="/createpost">Create Post</NavLink>
                  </NavItem>
                  <NavItem className="mt-2" style={{marginRight: "15px" }}>
                    <NavLink to="/authposts">My Posts</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {imagePreview}
                  </DropdownToggle>
                  <DropdownMenu right>
                    
                    <DropdownItem>
                      <NavItem>
                        <NavLink to={userProfile}>Profile</NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <a onClick={logout}>Logout</a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </React.Fragment>

            )

  const SignedOutLinks = (
                <React.Fragment>


                      <UncontrolledDropdown nav inNavbar style={{marginRight: "20px",
                 }}>
                  <DropdownToggle nav caret style={{color: '#000', marginTop: "-7px",
                 }} >
                    Learn
                  </DropdownToggle>

                  {/* start of navbar to be copied and pasted to SignedOutLinks */}

                  <DropdownMenu right>
                    <DropdownItem disabled>
                      <NavItem className="mt-2">
                        Linked Lists
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/singlylist'> Singly Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>

                      <NavItem>
                        <Link to='/doublylist'> Doubly Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleimplement'> Singly Linked List Implementation </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview1'> Singly-Linked lists: Interview problem 1: Merge two sorted linked lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview2'> Singly-Linked lists: Interview problem 2: Reverse a Sub List in Python </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview3'> Singly-Linked lists: Interview problem 3: Determine if Linked List has Cycle </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem>
                        <Link to='/singleinterview4'> Singly-Linked lists: Interview problem 4: Find Intersection of Two Linked Lists </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem divider />

                    <DropdownItem disabled>
                      <NavItem className="mt-2">
                        Developer essentials
                      </NavItem>
                    </DropdownItem>

                    <UncontrolledDropdown nav inNavbar style={{marginRight: "20px",
                 }}>

                    <DropdownToggle nav caret style={{color: '#000', marginTop: "1px",
                 }} >
                    React (JS)
                  </DropdownToggle>
                  <DropdownMenu left>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/funcvscomp'> The War of Functional vs Class Components: why Functional is better </Link> 
                      </NavItem>
                    </DropdownItem>

                    <DropdownItem>
                      <NavItem className="mt-2">
                        <Link to='/props'> Props </Link> 
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>

                    <DropdownItem divider />
                    <DropdownItem>
                      <a onClick={logout}>Logout</a>
                    </DropdownItem>
                  </DropdownMenu>


                </UncontrolledDropdown>

                  <NavItem style={{marginRight: "20px" }}>
                      <Link to='/playground'>Playground</Link>
                  </NavItem>
                  
                  <NavItem style={{marginRight: "20px"}}>
                    <Link to='/login'>Login</Link>
                  </NavItem>
                  <NavItem>
                  <Link to='/signup'>Signup</Link>
                  </NavItem>
                </React.Fragment>
              )
  return (
    <div className="mb-3">
      <Navbar className="color-nav" color="light" light expand="md"> 
          <NavbarBrand className="mx-auto" href="/"><span style={{ fontWeight: "bold"}}>DataFlow</span></NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen) } /> 
        <Collapse isOpen={isOpen} navbar> 
          <Nav className="ml-auto" navbar>
            { isAuthenticated ? SignedInLinks: SignedOutLinks }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation
