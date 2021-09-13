import { useFormik } from "formik";

import { Button, Icon, Form, FormField, Input } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

const AddExperinces = ({ resumeId, userId, handleExpForm }) => {
  let jobSeekerService = new JobSeekerService();
  const formik = useFormik({
    initialValues: {
      continues: true,
      position: "",
      quitYear: 0,
      resume: {
        resumeId: resumeId,
      },
      startYear: 0,
      workplace: "",
    },
    onSubmit: async (values) => {
      await jobSeekerService.addExperiences(values);
      console.log(values);
      //history.push(`/addResumDetails/${resumeId}/${userId}`);
      handleExpForm();
    },
  });

  return (
    <div>
      <Form className="adv" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ margin: "0.5em" }} htmlFor="city">
            Continues ?:
          </label>
          <Input
            id="continues"
            name="continues"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.continues}
          />
        </Form.Field>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Workplace ?
          </label>
          <Input
            id="workplace"
            name="workplace"
            onChange={formik.handleChange}
            value={formik.values.workplace}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Position ?
          </label>
          <Input
            id="position"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
          />
        </FormField>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Start Year ?
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
            Quit Year ?
          </label>
          <Input
            id="quitYear"
            name="quitYear"
            onChange={formik.handleChange}
            value={formik.values.quitYear}
          />
        </FormField>

        <Button type="submit">
          <Icon disabled name="plus" />
          Add informations
        </Button>
      </Form>
    </div>
  );
};

export default AddExperinces;
