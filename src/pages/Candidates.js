import { useEffect, useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmployerService from "../services/employerService";
import { useParams } from "react-router";

const Candidates = () => {
  const { adId } = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getApplicationsByAdId(adId).then((result) => {
      setCandidates(result.data.data);
    });
  }, []);

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "large" }} htmlFor="">
        Candidates
      </label>
      <Table color={"teal"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Candidate Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Go to Resume Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidates) => (
            <Table.Row key={candidates.resumeId}>
              <Table.Cell>{candidates.jobSeekerId}</Table.Cell>
              <Table.Cell>{candidates.name}</Table.Cell>
              <Table.Cell>{candidates.lastName}</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/resumedetails/${candidates.resumeId}/${candidates.jobSeekerId}`}
                >
                  <Button>See the resusme</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Candidates;
