import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg"
        />

        <Dropdown item text="Profile">
          <Dropdown.Menu>
            <Dropdown.Item icon="user circle" text="Account"></Dropdown.Item>
            <Dropdown.Item icon="info" text="Informations"></Dropdown.Item>
            <Dropdown.Item onClick={signOut} text="Logout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
