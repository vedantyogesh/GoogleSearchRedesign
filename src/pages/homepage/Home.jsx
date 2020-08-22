import React from "react";

//Material UI
import Grid from "@material-ui/core/Grid";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

import "./Home.css";
import Search from "../../components/search/Search";

function Home() {
  return (
    <div className="home">
        <Grid className="Logo-bgImage"></Grid>
        <Grid container direction="column" alignItems="center">
          <Grid container className="home-header" alignItems="center">
            <Grid item md={1}>
              <Grid container className="home-header-left" spacing={2}>
                <img
                src="https://uploads-ssl.webflow.com/5b72c51b79ce4e086b722f7e/5b7323e0578e6e6e19263608_Google_logo_white_2015.png"
                  alt="Logo" className="home-logo" />
              </Grid>
            </Grid>
            <Grid item md={1}>
              <Grid
                container
                className="home-headerRight"
                alignItems="center"
                justify="center"
                spacing={3}

              >
              <Grid item>
                <AppsIcon style={{ color: "#fff" }} />
              </Grid>
                <Grid item>
                  <center><Avatar src="https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Bitch" /></center>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="home-body" alignItems="center">
            <Grid item>
              <Search />
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}

export default Home;

// style={{backgroundColor:"#222"}}