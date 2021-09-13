import React, { useState } from "react";
import { Menu, Input, Container, Button, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import Advertisement from "../pages/Advertisement";
import JobList from "../pages/JobList";

export default function Navi() {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const history = useHistory();

  function handleSingOut(params) {
    setAuthenticated(false);
    //history.push("/");
  }

  function handleSingIn(params) {
    setAuthenticated(true);
  }

  return (
    <div className="app">
      <Menu inverted size="large">
        <Container content>
          <Menu.Item>
            <Link to="/">Main Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/advertisement">Advertisements</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/approvalprocess">Awaiting Approval</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/favorites">My Favorites</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/resume">My Resume</Link>
          </Menu.Item>
          {/* <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu> */}

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSingOut} smth="1" />
            ) : (
              <SignedOut signIn={handleSingIn} smth="2" />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
