import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Dropdown, Menu, Image, Icon, Button } from "semantic-ui-react";
import { setLoginType } from "../store/actions/loginTypeAction";
import { Link } from "react-router-dom";

export default function SignedIn({ signOut }) {
  const history = useHistory();

  const logintype = useSelector((state) => state.loginType);

  const dispatch = useDispatch();
  const handleSetLoginType = () => {
    dispatch(setLoginType(0));
  };

  const handleLogOut = () => {
    handleSetLoginType();
    signOut();
    history.push("/");
  };

  return (
    <div>
      <Menu.Item>
        <Menu.Item>
          <Link> My profile</Link>
        </Menu.Item>
        {logintype == 1 && (
          <Image
            avatar
            spaced="right"
            src="https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg"
          />
        )}
        <Menu.Item onClick={() => handleLogOut()}>
          <Button>
            {" "}
            <Icon name="sign-out" />
            Logout
          </Button>
        </Menu.Item>

        {/* <Dropdown item text="Profile" >
          <Dropdown.Menu>
            <Dropdown.Item icon="user circle" text="Account"></Dropdown.Item>
            <Dropdown.Item icon="info" text="Informations"></Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleLogOut()}
              text="Logout"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown> */}
      </Menu.Item>
    </div>
  );
}
