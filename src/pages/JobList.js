import React, { useState, useEffect } from "react";
import { Table, Menu, Icon, Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmployerService from "../services/employerService";
import "../App.css";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAdvertisementList()
      .then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div>
      {/* <Menu vertical floated>
        <Menu.Item name="home" />
        <Menu.Item name="City" />
        <Menu.Item name="Work Type" />
        <Menu.Item>
          <Input icon="search" placeholder="Search key..." />
        </Menu.Item>
        <Menu.Item>
          <Button color="brown">Find Job!</Button>
        </Menu.Item>
      </Menu> */}
      <Table color={"olive"} inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobs.map((job) => (
            <Table.Row key={job.adId}>
              <Table.Cell>
                <Link to={`/jobdetails/${job.adId}`}>
                  {job.employers.companyName}
                </Link>
              </Table.Cell>
              <Table.Cell>{job.title}</Table.Cell>
              <Table.Cell>{job.description}</Table.Cell>
              <Table.Cell>{job.city}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

      {/* <Item.Group divided>
        {jobs.map((job) => (
          <Item
            className="jobList11"
            style={{
              border: "2px purple solid",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <Item.Content>
              <Item.Header as="a">
                <Link to={`/jobdetails/${job.adId}`}>{job.title}</Link>
              </Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>{job.description}</Item.Description>
              <Item.Extra>{job.city}</Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group> */}
    </div>
  );
}
