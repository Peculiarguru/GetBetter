import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "./routes";
import {
  IconChevronRight,
  IconUser,
  IconLogout,
  IconBulb,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
import {
  Group,
  Avatar,
  Text,
  Menu,
  UnstyledButton,
  rem,
  Flex,
  MediaQuery,
} from "@mantine/core";

const UserButton = forwardRef(({ name, email, icon, ...others }, ref) => (
  <UnstyledButton
    ref={ref}
    sx={(theme) => ({
      display: "block",
      width: "100%",
      padding: theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      },
    })}
    {...others}
  >
    <Group>
      <Avatar radius="xl" color="cyan">
        <IconUser />
      </Avatar>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Flex align={"center"} gap={"md"}>
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size="1rem" />}
        </Flex>
      </MediaQuery>
    </Group>
  </UnstyledButton>
));

const UserMenu = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("currentData");
    if (storedData) {
      const currentUserData = JSON.parse(storedData);
      setUserData(currentUserData);
    }
  }, []);
  const { firstName, lastName, email } = userData;

  const handleSignOut = () => {
    navigate(ROUTES.home);
  };

  return (
    <div>
      <Group position="center">
        <Menu withArrow>
          <Menu.Target>
            <UserButton name={`${firstName} ${lastName}`} email={email} />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconUser size={rem(20)} color="black" />}>
              My profile
            </Menu.Item>
            {/* <Menu.Item icon={<IconSettings size={rem(20)} color="black" />}>
              Organization Settings
            </Menu.Item>
            <Menu.Item icon={<IconHelp size={rem(20)} color="black" />}>
              Help Center
            </Menu.Item> */}
            <Menu.Item icon={<IconBulb size={rem(20)} color="black" />}>
              Give us feedback
            </Menu.Item>
            <Menu.Item
              icon={<IconLogout size={rem(20)} color="black" />}
              onClick={handleSignOut}
            >
              Sign Out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  );
};

export default UserMenu;
