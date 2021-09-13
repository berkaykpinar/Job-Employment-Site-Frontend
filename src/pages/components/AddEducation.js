import { useFormik } from "formik";

import { Button, Icon, Form, FormField, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import JobSeekerService from "../../services/jobSeekerService";

const AddEducation = ({ resumeId, userId, handleEduForm }) => {
  let jobSeekerService = new JobSeekerService();
  const formik = useFormik({
    initialValues: {
      continues: true,
      department: "string",
      graduateYear: 0,
      resume: {
        resumeId: resumeId,
      },
      schoolName: "string",
      startYear: 0,
    },
    onSubmit: async (values) => {
      await jobSeekerService.addEducation(values);
      console.log(values);
      //history.push(`/addResumDetails/${resumeId}/${userId}`);
      handleEduForm();
    },
  });

  return (
    <div>
      <Form className="adv" onSubmit={formik.handleSubmit}>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            School Name ?
          </label>
          <Input
            id="schoolName"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Department:
          </label>
          <Input
            id="department"
            name="department"
            onChange={formik.handleChange}
            value={formik.values.department}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Start Year:
          </label>
          <Input
            id="startYear"
            name="startYear"
            onChange={formik.handleChange}
            value={formik.values.startYear}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Graduation Year ? (If still continues , estimate Year of graduate )
          </label>
          <Input
            id="graduateYear"
            name="graduateYear"
            onChange={formik.handleChange}
            value={formik.values.graduateYear}
          />
        </FormField>
        <Form.Field>
          <label style={{ margin: "0.5em" }} htmlFor="city">
            Continues ?:
          </label>
          <Input
            id="continues"
            name="continues"
            type="text-area"
            onChange={formik.handleChange}
            value={formik.values.continues}
          />
        </Form.Field>
        <Button type="submit">
          <Icon disabled name="plus" />
          Add informations
        </Button>
      </Form>
    </div>
  );
};

export default AddEducation;
