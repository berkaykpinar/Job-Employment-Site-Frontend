import { useEffect, useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import EmployerService from "../services/employerService";
import { Link } from "react-router-dom";

const MyAdvertisements = () => {
  const employerId = 23;
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAdvertisementListByEmployerId(employerId)
      .then((result) => {
        setAdvertisements(result.data.data);
      });
  }, []);

  return (
    <div>
      <Table color={"teal"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Details</Table.HeaderCell>
            <Table.HeaderCell>Id Number</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Position Number</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Approved ?</Table.HeaderCell>
            <Table.HeaderCell>Is Active ?</Table.HeaderCell>
            <Table.HeaderCell>See Applications </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {advertisements.map((advertisement) => (
            <Table.Row key={advertisement.adId}>
              <Table.Cell>
                <Link to={"/"}>
                  <Icon name="search" />
                </Link>
              </Table.Cell>
              <Table.Cell>{advertisement.adId}</Table.Cell>
              <Table.Cell>{advertisement.title}</Table.Cell>
              <Table.Cell>{advertisement.positionNum}</Table.Cell>

              <Table.Cell>{advertisement.deadline}</Table.Cell>
              <Table.Cell>{`${advertisement.isApproved}`}</Table.Cell>
              <Table.Cell>{`${advertisement.isActive}`}</Table.Cell>
              <Table.Cell>
                <Link to={`/candidates/${advertisement.adId}`}>
                  <Button>See candidates</Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button>
        <Link to={"/advertisement"}>Add a new Job Advertisement</Link>
      </Button>
    </div>
  );
};

export default MyAdvertisements;
