import { useEffect, useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import { Link } from "react-router-dom";

const Resume = () => {
  const userId = 11;
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getResumeById(userId).then((result) => {
      setResumes(result.data.data);
    });
  }, []);

  console.log(resumes.resumeId);

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "large" }} htmlFor="">
        My Resumes
      </label>
      <Table color={"olive"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Details</Table.HeaderCell>
            <Table.HeaderCell>Resume Id</Table.HeaderCell>
            <Table.HeaderCell>Cover Letter</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.resumeId}>
              <Table.Cell>
                <Link to={`/resumedetails/${resume.resumeId}/${userId}`}>
                  <Icon name="search" />
                </Link>
                {/* <Link to={`/resumedetails/${resume.resumeId}`}>
                  {resume.resumeId}
                </Link> */}
              </Table.Cell>
              <Table.Cell>{resume.resumeId}</Table.Cell>
              <Table.Cell>{resume.coverLetter}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button>
        <Link to={"/addresume"}>Add a new Resume</Link>
      </Button>
    </div>
  );
};

export default Resume;
