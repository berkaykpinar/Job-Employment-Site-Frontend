import { useFormik } from "formik";

import { Button, Icon, Form, FormField, Input } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

const AddSkills = ({ resumeId, userId, handleSkillForm }) => {
  let jobSeekerService = new JobSeekerService();
  const formik = useFormik({
    initialValues: {
      resume: {
        resumeId: resumeId,
      },
      skillLevel: "",
      skillName: "",
    },
    onSubmit: async (values) => {
      await jobSeekerService.addSkills(values);
      console.log(values);
      //history.push(`/addResumDetails/${resumeId}/${userId}`);
      handleSkillForm();
    },
  });

  return (
    <div>
      <Form className="adv" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ margin: "0.5em" }} htmlFor="city">
            Skill Name ?
          </label>
          <Input
            id="skillName"
            name="skillName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.skillName}
          />
        </Form.Field>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Skill Level ?
          </label>
          <Input
            id="skillLevel"
            name="skillLevel"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.skillLevel}
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

export default AddSkills;
