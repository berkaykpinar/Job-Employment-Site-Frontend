import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Label,
  Card,
  Divider,
  Segment,
  Rating,
  Icon,
  Menu,
  Sticky,
} from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function ResumeDetail() {
  let { resumeId, userId } = useParams();
  const jobSeekerService = new JobSeekerService();
  const [jobseeker, setJobseeker] = useState([]);
  const [resume, setResume] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExpoerinces] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    jobSeekerService.getResumeByIdAndResumeId(userId, resumeId).then((res) => {
      setResume(res.data.data);
      console.log(res.data.data);
    });
    jobSeekerService.getJobSeekerById(userId).then((result) => {
      setJobseeker(result.data.data);
    });
    jobSeekerService.getEducation(resumeId).then((res) => {
      setEducation(res.data.data);
    });
    jobSeekerService.getExperiences(resumeId).then((res) => {
      setExpoerinces(res.data.data);
    });
    jobSeekerService.getSkills(resumeId).then((res) => {
      setSkills(res.data.data);
    });
    jobSeekerService.getLanguages(resumeId).then((res) => {
      setLanguages(res.data.data);
    });
  }, []);

  function handleItemClick() {
    console.log("test");
  }

  return (
    <div>
      <Sticky active onBottom>
        <Menu floated="right" vertical pointing>
          <Menu.Item
            name="Personnal Informations"
            href="#segment1"
            onClick={() => handleItemClick()}
          />

          <Menu.Item
            name="Contact Informations"
            href="#segment2"
            onClick={() => handleItemClick()}
          />
          <Menu.Item
            href="#segment3"
            name="Educations"
            onClick={() => handleItemClick()}
          />
          <Menu.Item
            href="#segment4"
            name="Exporiences"
            onClick={() => handleItemClick()}
          />
          <Menu.Item
            href="#segment5"
            name="Skills"
            onClick={() => handleItemClick()}
          />
          <Menu.Item
            href="#segment6"
            name="Languages"
            onClick={() => handleItemClick()}
          />
        </Menu>
      </Sticky>

      <Card fluid style={{ width: "70%" }} link>
        <Label id="segment1" color="blue" ribbon>
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
        <Label id="segment2" color="brown" ribbon>
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
        <Label id="segment3" color="green" ribbon>
          Education
        </Label>
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

        <Label id="segment4" color="purple" ribbon>
          Exporiences
        </Label>
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
        <Label id="segment5" color="red" ribbon>
          Skills
        </Label>
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
        <Label id="segment6" color="yellow" ribbon>
          Languages
        </Label>
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
      </Card>
    </div>
  );
}
