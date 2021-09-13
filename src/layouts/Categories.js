import React from "react";
import { Menu, Input, Button } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="City" />
        <Menu.Item name="Working type" />
        <Menu.Item name="Working Style " />
        <Menu.Item>
          <Input icon="search" placeholder="Search key..." />
        </Menu.Item>
        <Menu.Item>
          <Button color="brown">Find Job!</Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
