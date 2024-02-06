import React from "react";
import { NavLink, Stack, rem } from "@mantine/core";
import { IconHome2, IconUsersGroup, IconChecklist } from "@tabler/icons-react";
import Retrospect from "./Retrospect";
import ROUTES from "./routes";
import { Link, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";

const SideMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Stack>
      <NavLink
        label="Home"
        active={location.pathname === ROUTES.dashboard}
        component={Link}
        to={ROUTES.dashboard}
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        label="Retrospectives"
        active={location.pathname === ROUTES.retrospect}
        component={Link}
        to={ROUTES.retrospect}
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        label="Action Plan"
        icon={<IconChecklist size="1rem" stroke={1.5} />}
      />
      {/* <NavLink
        label="Team Radars"
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      /> */}
      {/* <NavLink
        label="Analytics"
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      /> */}
      <NavLink
        label="My Team"
        icon={<IconUsersGroup size="1rem" stroke={1.5} />}
      />
    </Stack>
  );
};

export default SideMenu;
