import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";

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
