import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Icon, Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";
import EmployerService from "../services/employerService";

const Favorites = () => {
  const [control, setControl] = useState(false);
  const [temp, setTemp] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [favAds, setFavAds] = useState([]);
  const [ads, setAds] = useState([]);
  const favorite = [];
  const History = useHistory();

  useEffect(async () => {
    let jobSeekerService = new JobSeekerService();
    //setTimeout(() => {}, 1000);
    try {
      let response = await jobSeekerService.getFavorites(11);
      let data = await response.data.data;
      //console.log(data);
      console.log(data);
      setFavAds(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    let employerService = new EmployerService();
    //console.log("test");
    favAds.map(async (e) => {
      try {
        console.log(e.favAdId);
        let result = await employerService.getByAdvertisementId(e.favAdId);
        let data = await result.data.data;
        temp.push(data);
        // ads.push(data);
        // console.log(ads.length);
        handleControl();
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  useEffect(() => {
    setAds(temp);
    console.log(control);
  }, [control]);

  const handleControl = async () => {
    setControl(!control);
  };

  // useEffect(() => {
  //   const fetchFiles = async (id, name) => {
  //       const result = await axios(
  //         `https://api.figma.com/v1/projects/${id}/files`, {
  //           headers: { 'Authorization': `Bearer ${token}` }
  //         });

  //       setFiles(prevFiles => ([ ...prevFiles, {
  //         projectName: name,
  //         files: result.data.files
  //       }]))
  //     };
  //   projects.forEach(project => {
  //     fetchFiles(project.id, project.name);
  //   })
  // }, [projects]);

  //console.log(ads.find(ads.adId == 22));

  return (
    <div>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />

            <Table.HeaderCell>Advertisement Id</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Position Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {favAds != null &&
            favAds.map((ad) => (
              <Table.Row key={ad.adId}>
                <Button icon>
                  <Link to={`/jobdetails/${ad.favAdId}`}>
                    <Icon name="search" />
                  </Link>
                </Button>
                {/* <Table.Cell>{ad.employers.companyName}</Table.Cell> */}
                <Table.Cell>{ad.favAdId}</Table.Cell>
                <Table.Cell>{ad.adId}</Table.Cell>

                <Table.Cell>{ad.positionNum}</Table.Cell>
                <Table.Cell>{ad.deadline}</Table.Cell>
                {/* <Table.Cell>{ad.employers.phoneNumber}</Table.Cell> */}
                <Table.Cell collapsing></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Favorites;
