import React from "react";
import './App.css';
import { Auth } from "aws-amplify";
import { onError } from "../../login/src/libs/errorLib";
import { AppContext } from "../../login/src/libs/contextLib";
import { useHistory } from "react-router-dom";
import { Navbar, NavItem } from "react-bootstrap";
import  { useState, useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    onLoad();
  }, []);
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }
  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    history.push("/login");
  }
  return (
    <div className="App">
      {isAuthenticating &&
        <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/">Scratch</LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <nav>
                {isAuthenticated
                  ? <NavItem onClick={handleLogout}>Logout</NavItem>
                  : <>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </>
                }
              </nav>
            </Navbar.Collapse>
          </Navbar>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
          </AppContext.Provider>
        </div>
      }
    </div>
  );
}

export default App;
