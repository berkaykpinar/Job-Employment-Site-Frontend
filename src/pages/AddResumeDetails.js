import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Label,
  Button,
  Card,
  Divider,
  Segment,
  Icon,
  Rating,
  Menu,
  Sticky,
} from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import AddEducation from "./components/AddEducation";
import AddExperinces from "./components/AddExperiences";
import AddLanguages from "./components/AddLanguages";
import AddSkills from "./components/AddSkills";

const AddResumeDetails = () => {
  let { resumeId, userId } = useParams();
  const [eduForm, setEduForm] = useState(false);
  const [expForm, setExpForm] = useState(false);
  const [skillForm, setSkillForm] = useState(false);
  const [langForm, setLangForm] = useState(false);

  const jobSeekerService = new JobSeekerService();
  const [jobseeker, setJobseeker] = useState([]);
  const [resume, setResume] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperinces] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    jobSeekerService.getJobSeekerById(userId).then((result) => {
      setJobseeker(result.data.data);
    });
  }, []);

  useEffect(() => {
    jobSeekerService.getResumeByIdAndResumeId(userId, resumeId).then((res) => {
      setResume(res.data.data);
    });
  }, []);

  useEffect(() => {
    jobSeekerService.getEducation(resumeId).then((res) => {
      setEducation(res.data.data);
    });
  }, [eduForm]);

  useEffect(() => {
    jobSeekerService.getExperiences(resumeId).then((res) => {
      setExperinces(res.data.data);
      console.log(res.data.data);
    });
  }, [expForm]);

  useEffect(() => {
    jobSeekerService.getSkills(resumeId).then((res) => {
      setSkills(res.data.data);
      console.log(res.data.data);
    });
  }, [skillForm]);

  useEffect(() => {
    jobSeekerService.getLanguages(resumeId).then((res) => {
      setLanguages(res.data.data);
      console.log(res.data.data);
    });
  }, [langForm]);

  const handleEduForm = () => {
    setEduForm(!eduForm);
  };

  const handleExpForm = () => {
    console.log(expForm);
    setExpForm(!expForm);
  };
  const handleSkillForm = () => {
    setSkillForm(!skillForm);
  };

  const handleLangForm = () => {
    setLangForm(!langForm);
  };

  return (
    <div>
      <Sticky active onBottom>
        <Menu floated="right" vertical pointing>
          <Menu.Item
            name="Personnal Informations"
            href="#segment1"
            onClick={() => {}}
          />

          <Menu.Item
            name="Contact Informations"
            href="#segment2"
            onClick={() => {}}
          />
          <Menu.Item href="#segment3" name="Educations" onClick={() => {}} />
          <Menu.Item href="#segment4" name="Exporiences" onClick={() => {}} />
          <Menu.Item href="#segment5" name="Skills" onClick={() => {}} />
          <Menu.Item href="#segment6" name="Languages" onClick={() => {}} />
        </Menu>
      </Sticky>

      <Card fluid="false" style={{ width: "70%" }}>
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment1"
          color="blue"
          ribbon
        >
          Personnal Informations
        </Label>
        <Segment>
          <Divider horizontal>Name & Surname</Divider>
          <p>
            {jobseeker.firstName} {jobseeker.lastName}
          </p>
          <Divider inverted />
          <Divider horizontal>National Id</Divider>
          <p>{jobseeker.nationalIdd}</p>
          <Divider inverted />
          <Divider horizontal>Birth Date</Divider>
          <p>{jobseeker.birthDate}</p>
          <Divider inverted />
          <Divider horizontal>Cover Letter</Divider>
          <p>{resume.coverLetter}</p>
          <Divider inverted />
        </Segment>
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment2"
          color="brown"
          ribbon
        >
          Contact Informations
        </Label>
        <Segment>
          <Divider horizontal>
            <Icon name="mail" /> Email
          </Divider>

          <p>{jobseeker.email}</p>

          <Divider inverted />
          <Divider horizontal>
            {" "}
            <Icon name="linkedin" /> Linkedin Address
          </Divider>
          <p>{resume.linkedinAddress}</p>
          <Divider inverted />
          {resume.gitHubAddress != "" && (
            <Divider horizontal>
              {" "}
              <Icon name="github" />
              Github Address
            </Divider>
          )}
          {resume.gitHubAddress != "" && <p>{resume.gitHubAddress}</p>}

          <Divider inverted />
        </Segment>
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment3"
          color="green"
          ribbon
        >
          Education
        </Label>
        {education != null && (
          <Segment>
            <Divider horizontal>University</Divider>
            <p>{education.schoolName}</p>
            <Divider inverted />
            <Divider horizontal>Department</Divider>
            <p>{education.department}</p>
            <Divider inverted />

            <Divider horizontal>Start Year & Graduate Year</Divider>
            <p>
              {education.startYear} {"-"} {education.graduateYear}
            </p>
            <Divider inverted />
            <Divider horizontal>Is Continues?</Divider>
            <p>{education.continues ? "Yes" : "No"}</p>
            <Divider inverted />
          </Segment>
        )}{" "}
        <Button onClick={() => setEduForm(true)}>
          <Icon disabled name="plus" />
          Add Education iformation
        </Button>
        {eduForm && (
          <AddEducation
            resumeId={resumeId}
            userId={userId}
            handleEduForm={handleEduForm}
          />
        )}
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment4"
          color="purple"
          ribbon
        >
          Experiences
        </Label>
        {experiences != null && (
          <Segment>
            {experiences.map((experiences) => (
              <Card style={{ width: "100%" }} link>
                <Divider horizontal>place</Divider>
                <p>{experiences.workplace}</p>
                <Divider inverted />
                <Divider horizontal>Position</Divider>
                <p>{experiences.position}</p>
                <Divider inverted />

                <Divider horizontal>Start Year & Quit Year</Divider>
                <p>
                  {experiences.startYear} {"-"} {experiences.quitYear}
                </p>
                <Divider inverted />
                <Divider horizontal>Experience year</Divider>
                <p>{experiences.experinceYear}</p>
                <Divider inverted style={{ marginBottom: "50px" }} />
              </Card>
            ))}
          </Segment>
        )}
        <Button onClick={() => setExpForm(true)}>
          <Icon disabled name="plus" />
          Add Experiences
        </Button>
        {expForm && (
          <AddExperinces
            resumeId={resumeId}
            userId={userId}
            handleExpForm={handleExpForm}
          />
        )}
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment5"
          color="red"
          ribbon
        >
          Skills
        </Label>
        {skills != null && (
          <Segment>
            {skills.map((skill) => (
              <Card style={{ width: "100%" }} link>
                <Divider horizontal>Skill Name</Divider>
                <p>{skill.skillName}</p>
                <Divider inverted />
                <Divider horizontal>Skill Level</Divider>
                <p>{skill.skillLevel}</p>
                <Divider inverted style={{ marginBottom: "40px" }} />
              </Card>
            ))}
          </Segment>
        )}
        <Button onClick={() => setSkillForm(true)}>
          <Icon disabled name="plus" />
          Add Skills
        </Button>
        {skillForm && (
          <AddSkills
            resumeId={resumeId}
            userId={userId}
            handleSkillForm={handleSkillForm}
          />
        )}
        <Label
          style={{ marginTop: "50px" }}
          size="big"
          id="segment6"
          color="yellow"
          ribbon
        >
          Languages
        </Label>
        {languages != null && (
          <Segment>
            {languages.map((languages) => (
              <Card style={{ width: "100%" }} link>
                <Divider horizontal>Language</Divider>
                <p>{languages.language}</p>
                <Divider inverted />
                <Divider horizontal>Language Level</Divider>
                <Rating
                  icon="star"
                  defaultRating={languages.languageLevel}
                  maxRating={5}
                />
                <Divider inverted style={{ marginBottom: "40px" }} />
              </Card>
            ))}
          </Segment>
        )}
        <Button onClick={() => setLangForm(true)}>
          <Icon disabled name="plus" />
          Add Languages
        </Button>
        {langForm && (
          <AddLanguages
            resumeId={resumeId}
            userId={userId}
            handleLangForm={handleLangForm}
          />
        )}
      </Card>
    </div>
  );
};

export default AddResumeDetails;
