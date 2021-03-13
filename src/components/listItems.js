import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const Input = styled("input")({
  display: "none",
});

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DirectionsBoatIcon />
      </ListItemIcon>
      <ListItemText primary="Boat 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsBoatIcon />
      </ListItemIcon>
      <ListItemText primary="Boat 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsBoatIcon />
      </ListItemIcon>
      <ListItemText primary="Boat 3" />
    </ListItem>
  </div>
);

export const thirdListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CloudUploadIcon />
      </ListItemIcon>
      <ListItemText>
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </ListItemText>
    </ListItem>
  </div>
);
