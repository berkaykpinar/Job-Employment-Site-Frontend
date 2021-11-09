import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route } from "react-router";
import JobList from "../pages/JobList";
import JobDetail from "../pages/JobDetail";
import Advertisement from "../pages/Advertisement";
import ApprovalProcess from "../pages/ApprovalProcess";
import Favorites from "../pages/Favorites";
import Resume from "../pages/Resume";
import ResumeDetail from "../pages/ResumeDetail";
import AddResume from "../pages/AddResume";
import AddResumeDetails from "../pages/AddResumeDetails";
import MyAdvertisements from "../pages/MyAdvertisements";
import ApplyDetails from "../pages/ApplyDetails";
import MyApplications from "../pages/MyApplications";
import Candidates from "../pages/Candidates";
import ProfileDetails from "../pages/ProfileDetails";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn>
            <Route path="/approvalprocess" component={ApprovalProcess} />
            <Route path="/jobdetails/:adId" component={JobDetail} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/resume" component={Resume} />
            <Route
              path="/resumedetails/:resumeId/:userId"
              component={ResumeDetail}
            />
            <Route path="/addresume" component={AddResume} />
            <Route
              path="/addResumDetails/:resumeId/:userId"
              component={AddResumeDetails}
            ></Route>
            <Route
              path="/applydetails/:adId/:userId"
              component={ApplyDetails}
            />
            <Route exact path="/" component={JobList} />
            <Route exact path="/joblist" component={JobList} />

            <Route path="/advertisement" component={Advertisement} />
            <Route path="/myadvertisements" component={MyAdvertisements} />
            <Route path="/myapplications" component={MyApplications} />
            <Route path="/candidates/:adId" component={Candidates} />
            <Route path="/profiledetails/:userId" component={ProfileDetails} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
