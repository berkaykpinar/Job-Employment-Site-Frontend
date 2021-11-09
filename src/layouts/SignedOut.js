import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, Button, Modal, Form, Checkbox, Input } from "semantic-ui-react";
import { setLoginType } from "../store/actions/loginTypeAction";
import { setUserId } from "../store/actions/authAction";
import SignedIn from "./SignedIn";
import employerService from "../services/employerService";
import { is } from "@babel/types";

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

  const handleSetUser = (type) => {
    if (type.success == true) {
      onClickUser();
      dispatchh(setUserId(type.message));
    } else {
      alert("Your email or password is wrong try again");
    }
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let auth = new employerService();
      await auth
        .getAuthService(values)
        .catch(Response)
        .then((res) => handleSetUser(res.data));
      //console.log(values);
    },
  });

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
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <Input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Field>
            <Button type="submit" positive>
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
