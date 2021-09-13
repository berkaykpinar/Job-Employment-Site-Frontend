import React, { useState, Component } from "react";
import {
  Button,
  Segment,
  Checkbox,
  Form,
  TextArea,
  Input,
  Radio,
  Dropdown,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
import PersonnelService from "../services/personnelService";
import EmployerService from "../services/employerService";
import { useHistory } from "react-router-dom";

export default function Advertisement() {
  //const [startDate, setStartDate] = useState(new Date());
  // const [lastDate, setLastDate] = useState(new Date());
  ///const [workType, setWorkType] = React.useState(1);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      city: "",
      deadline: "",
      description: "",
      employers: { id: 13 },
      isActive: false,
      isApproved: false,
      positionNum: 0,
      title: "",
      workingStyle: "",
      workingType: "",
    },
    onSubmit: (values) => {
      let employerService = new EmployerService();
      employerService.addAddvertisement(values);
      //alert(JSON.stringify(values, null, 2));
      //console.log(values);
      history.push("/");
    },
  });

  return (
    <Form className="adv" onSubmit={formik.handleSubmit}>
      <Form.Group inline widths="equal">
        <label style={{ margin: "0.5em" }} htmlFor="city">
          City:
        </label>
        <Input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <label
          style={{ margin: "0.5em", marginLeft: "30px" }}
          htmlFor="deadline"
        >
          Deadline:
        </label>
        <Input
          id="deadline"
          name="deadline"
          onChange={formik.handleChange}
          value={formik.values.deadline}
        />
      </Form.Group>
      <Form.Group style={{ marginTop: "50px" }} inline widths="equal">
        <label>Working type :</label>
        <label>Normal</label>
        <Input
          type="radio"
          id="workingType"
          name="workingType"
          value="normal"
          checked={formik.values.workingType == "normal"}
          onChange={formik.handleChange}
        />
        <label style={{ marginLeft: "17px" }}>Remote</label>
        <Input
          type="radio"
          id="workingType"
          name="workingType"
          value="remote"
          checked={formik.values.workingType == "remote"}
          onChange={formik.handleChange}
        />

        <label style={{ marginLeft: "50px" }}>Working Style : </label>
        <select
          style={{ maxHeight: "50px", maxWidth: "250px" }}
          size="50px"
          name="workingStyle"
          value={formik.values.workingStyle}
          onChange={formik.handleChange}
        >
          <option value="" label="Pick a working style!" />
          <option value="Full-Time" label="Full-Time" />
          <option value="Part-Time" label="Part-Time" />
          <option value="Temporary" label="Temporary" />
          <option value="Intern" label="Intern" />
        </select>
      </Form.Group>
      <Form.Group
        style={{ marginTop: "50px", marginBottom: "50px" }}
        inline
        widths="equal"
      >
        <label style={{ margin: "0.5em" }} htmlFor="isActive">
          Active :
        </label>
        <Checkbox
          toggle
          type="checkbox"
          id="isActive"
          name="isActive"
          onChange={formik.handleChange}
          value={formik.values.isActive}
        />
        {/* <label>{`${formik.values.isActive}`}</label> */}

        <label style={{ margin: "0.5em", marginLeft: "80px" }}>
          Number of open positions :
        </label>
        <Input
          id="positionNum"
          name="positionNum"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.positionNum}
        />
      </Form.Group>
      <Form.Field>
        <label style={{ margin: "0.5em" }}> Title : </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </Form.Field>

      <Form.Field>
        <label style={{ margin: "0.5em" }}>Description :</label>
        <TextArea
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

{
  /* <Form>
        <Form.Group unstackable widths={2}>
          <div style={({ fontWeight: "bold" }, { color: "black" })}>
            Start date
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div style={({ fontWeight: "bold" }, { color: "black" })}>
            End date
          </div>
          <DatePicker
            selected={lastDate}
            onChange={(date) => setLastDate(date)}
          />
        </Form.Group>

        <Form.Group unstackable widths={2}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <DatePicker
            selected={lastDate}
            onChange={(date) => setLastDate(date)}
          />
        </Form.Group>

        <Form.Input label="Job title" placeholder="Job title" />
        <Form.Input label="Description" placeholder="Description" />

        <Form.Input label="Date" placeholder="Date" />
        <Form.Input label="Phone" placeholder="Phone" />

        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Segment compact>
          <Checkbox label="Date" toggle />
        </Segment>
        <Button type="submit">Submit</Button>
      </Form> */
}
