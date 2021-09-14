import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, Button, Modal, Form, Checkbox } from "semantic-ui-react";
import { setLoginType } from "../store/actions/loginTypeAction";
import SignedIn from "./SignedIn";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function SignedOut({ signIn }) {
  const dispatchh = useDispatch();

  const handleSetType = (type) => {
    dispatchh(setLoginType(type));
    console.log("test");
  };

  const onClickUser = () => {
    handleSetType(1);
    signIn();
  };
  const onClickEmployer = () => {
    handleSetType(2);
    signIn();
  };
  const onClickPersonnel = () => {
    handleSetType(3);
    signIn();
  };

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <div>
      <Menu.Item position="right">
        <Button
          primary
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "inverted" })}
        >
          Login
        </Button>

        <Button positive style={{ marginLeft: "0.5em" }}>
          Register
        </Button>
      </Menu.Item>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Please enter your Informations</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button
              positive
              onClick={() => {
                onClickUser();
              }}
            >
              Login
            </Button>
            <Button
              secondary
              onClick={() => onClickEmployer()}
              style={{ marginLeft: "0.5em" }}
            >
              Employer Login
            </Button>
            <Button onClick={() => onClickPersonnel()} negative floated="right">
              Personnel Login
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
