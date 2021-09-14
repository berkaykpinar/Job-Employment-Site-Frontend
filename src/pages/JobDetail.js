import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Button,
  Header,
  List,
  Icon,
  Segment,
  Container,
} from "semantic-ui-react";
import EmployerService from "../services/employerService";
import JobSeekerService from "../services/jobSeekerService";
import { Link, useHistory } from "react-router-dom";

export default function JobDetail() {
  const loginType = useSelector((state) => state.loginType);
  let userId = 11;
  let { adId } = useParams();
  const [job, setJob] = useState([]);

  const [fav, setFav] = useState({});

  const handleClick = () => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.addFavorites(fav);
    alert("The advertisement has added your favorites!");
    //alert(JSON.stringify(fav, null, 2));
  };

  useEffect(() => {
    setFav({ favAdId: parseInt(adId), favId: 0, jobSeekers: { id: userId } });
    let employerService = new EmployerService();
    employerService
      .getByAdvertisementId(adId)
      .then((result) => setJob(result.data.data));
  }, []);

  return (
    <div>
      {loginType == 1 && (
        <Link to={`/applydetails/${adId}/${userId}`}>
          <Button positive floated>
            Apply now!
          </Button>
        </Link>
      )}

      {loginType == 1 && (
        <Button floated="right" color="violet" onClick={handleClick}>
          <Icon name="favorite"></Icon>
          Add Favorites
        </Button>
      )}

      <Header as="h3" block>
        {job.title}
      </Header>
      <Segment.Group horizontal>
        <Segment>
          <Icon name="building" />
          {/* Company :{job.employers.companyName} */}
        </Segment>
        <Segment>
          <Icon name="map marker" />
          City :{job.city}
        </Segment>
        <Segment>
          <Icon name="history" />
          Date : {job.deadline}
        </Segment>
      </Segment.Group>

      <List divided verticalAlign="middle" floated="left">
        <List.Item>
          <Icon name="users" />
          <List.Content>
            <List.Header>Number of open positions : </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="computer" />
          <List.Content>
            <List.Header>Working type : </List.Header>
          </List.Content>
        </List.Item>

        <List.Item>
          <Icon name="check circle" />
          <List.Content>
            <List.Header>Working style : </List.Header>
          </List.Content>
        </List.Item>
      </List>
      <Container textAlign="right">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    </div>
  );
}
