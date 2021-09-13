import React from "react";
import Categories from "./Categories";
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
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Route exact path="/">
              <Categories />
            </Route>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobList} />
            <Route exact path="/joblist" component={JobList} />

            <Route path="/advertisement" component={Advertisement} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
