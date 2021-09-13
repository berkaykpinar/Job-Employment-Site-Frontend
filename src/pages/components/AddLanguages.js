import { useFormik } from "formik";

import { Button, Icon, Form, FormField, Input } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

const AddLanguages = ({ resumeId, userId, handleLangForm }) => {
  let jobSeekerService = new JobSeekerService();
  const formik = useFormik({
    initialValues: {
      language: "",
      languageLevel: 0,
      resume: {
        resumeId: resumeId,
      },
    },
    onSubmit: async (values) => {
      await jobSeekerService.addLanguage(values);
      console.log(values);
      //history.push(`/addResumDetails/${resumeId}/${userId}`);
      handleLangForm();
    },
  });

  return (
    <div>
      <Form className="adv" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label style={{ margin: "0.5em" }} htmlFor="city">
            Language ?
          </label>
          <Input
            id="language"
            name="language"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.language}
          />
        </Form.Field>
        <FormField>
          <label
            style={{ margin: "0.5em", marginLeft: "30px" }}
            htmlFor="deadline"
          >
            Language Level (1 to 5) ?
          </label>
          <Input
            id="languageLevel"
            name="languageLevel"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.languageLevel}
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

export default AddLanguages;
