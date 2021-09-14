import { useEffect, useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import { Link } from "react-router-dom";

const MyApplications = () => {
  const userId = 11;
  const [applications, setAplications] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getApplicationListByUserId(userId).then((result) => {
      setAplications(result.data.data);
    });
  }, []);

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "large" }} htmlFor="">
        My Applications
      </label>
      <Table color={"teal"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Go to Advertisement</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Working Style</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {applications.map((application) => (
            <Table.Row key={application.resumeId}>
              <Table.Cell>
                <Link to={`/jobdetails/${application.jobAdvertisement.adId}`}>
                  <Icon name="search" />
                </Link>
              </Table.Cell>
              <Table.Cell>{application.jobAdvertisement.title}</Table.Cell>
              <Table.Cell>{application.jobAdvertisement.city}</Table.Cell>
              <Table.Cell>
                {application.jobAdvertisement.workingStyle}
              </Table.Cell>
              <Table.Cell>
                {application.jobAdvertisement.employers.companyName}
              </Table.Cell>
              <Table.Cell>{application.jobAdvertisement.deadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyApplications;
