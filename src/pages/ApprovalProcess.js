import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Icon, Table } from "semantic-ui-react";
import PersonnelService from "../services/personnelService";

const ApprovalProcess = () => {
  const [ads, setAds] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let personnelService = new PersonnelService();
    personnelService.getAwaitingAds().then((result) => {
      setAds(result.data.data);
    });
  }, []);

  console.log(ads);

  return (
    <div>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Advertisement Title</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Position Number</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Company Number</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ads.map((ad) => (
            <Table.Row key={ad.adId}>
              <Button icon>
                <Link to={`/jobdetails/${ad.adId}`}>
                  <Icon name="search" />
                </Link>
              </Button>
              <Table.Cell>{ad.employers.companyName}</Table.Cell>
              <Table.Cell>{ad.title}</Table.Cell>
              <Table.Cell>{ad.city}</Table.Cell>
              <Table.Cell>{ad.positionNum}</Table.Cell>
              <Table.Cell>{ad.deadline}</Table.Cell>
              <Table.Cell>{ad.employers.phoneNumber}</Table.Cell>
              <Table.Cell collapsing>
                <Button
                  positive
                  size="small"
                  onClick={() => {
                    let personnelService = new PersonnelService();
                    personnelService.updateStatus(ad.adId, true);
                    console.log(ad.adId, true);
                    history.go(0);
                  }}
                >
                  Approve
                </Button>
              </Table.Cell>

              <Table.Cell collapsing>
                <Button negative size="small">
                  Reject
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ApprovalProcess;
