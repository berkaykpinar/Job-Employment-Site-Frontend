import { useFormik } from "formik";
import { Button, Form, FormField, Input, Icon } from "semantic-ui-react";

import JobSeekerService from "../services/jobSeekerService";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddResume = () => {
  const [response, setResponse] = useState();
  const userId = 11;
  let resumeId = 0;
  const history = useHistory();

  ///id değişecek
  const formik = useFormik({
    initialValues: {
      coverLetter: "",
      gitHubAddress: "",
      jobSeekers: {
        id: userId,
      },
      linkedinAddress: "",
    },
    onSubmit: async (values) => {
      let jobSeekerService = new JobSeekerService();
      await jobSeekerService
        .addResume(values)
        .catch(Response)
        .then((res) => {
          //
          // setResponse(res.data.message);
          resumeId = res.data.message;
        });
      history.push(`/addResumDetails/${resumeId}/${userId}`);
    },
  });

  return (
    <div>
      <Form className="adv" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ margin: "0.5em" }} htmlFor="city">
            Cover Letter:
          </label>
          <Input
            id="coverLetter"
            name="coverLetter"
            type="text-area"
            onChange={formik.handleChange}
            value={formik.values.coverLetter}
          />
        </Form.Field>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Linkedin Address:
          </label>
          <Input
            id="gitHubAddress"
            name="gitHubAddress"
            onChange={formik.handleChange}
            value={formik.values.gitHubAddress}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Github Address:
          </label>
          <Input
            id="linkedinAddress"
            name="linkedinAddress"
            onChange={formik.handleChange}
            value={formik.values.linkedinAddress}
          />
        </FormField>
        <Button type="submit">
          <Icon disabled name="plus" />
          {/* <Link to={`/addResumDetails/${response}/${userId}`}></Link> */}
          Add informations
        </Button>{" "}
      </Form>
    </div>
  );
};

export default AddResume;
