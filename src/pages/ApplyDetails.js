import { useEffect, useState } from "react";
import { Table, Icon, Button, Label, TableCell } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { useFormik } from "formik";
const ApplyDetails = () => {
  const { adId, userId } = useParams();

  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState(0);

  const history = useHistory();

  let jobSeekerService = new JobSeekerService();
  useEffect(() => {
    jobSeekerService.getResumeById(userId).then((result) => {
      setResumes(result.data.data);
    });
  }, []);

  const values = {
    advertisementId: adId,
    jobAdvertisement: {
      adId: adId,
    },
    jobSeekerId: userId,
    resumeId: resumeId,
  };

  const handleApply = () => {
    jobSeekerService.addJobApply(values);
    history.push(`/jobdetails/${adId}`);
  };

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "large" }}>
        Select a Resume
      </label>{" "}
      <Link to={"/addresume"}>
        <Button style={{ marginBottom: "20px" }} floated="right">
          <Icon name="plus"></Icon>
          Add a new Resume
        </Button>
      </Link>
      <Table color={"olive"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Details</Table.HeaderCell>
            <Table.HeaderCell>Resume Id</Table.HeaderCell>
            <Table.HeaderCell>Cover Letter</Table.HeaderCell>
            <Table.HeaderCell>Email address</Table.HeaderCell>
            <Table.HeaderCell>Select</Table.HeaderCell>
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
              <Table.Cell>{resume.jobSeekers.email}</Table.Cell>
              <Table.Cell style={{ color: "red" }}>
                <Button
                  key={resume.resumeId}
                  onClick={() => {
                    setResumeId(resume.resumeId);
                  }}
                >
                  <Icon name="add" /> Select
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {resumeId != 0 && (
        <h5 style={{ marginTop: "20px" }}>
          Apply with this resume Id : {resumeId}
        </h5>
      )}
      <Button
        onClick={() => {
          handleApply();
        }}
      >
        <Icon name="add" /> Apply now!
      </Button>
    </div>
  );
};

export default ApplyDetails;
