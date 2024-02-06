import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Flex,
  Text,
  MediaQuery,
} from "@mantine/core";
import { IconPlus, IconMenu2, IconX } from "@tabler/icons-react";
import { Button, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import UserMenu from "./UserMenu";
import SideMenu from "./SideMenu";
import Cards from "./Cards";

const DashboardLayout = ({ children }) => {
  const [showNavigation, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AppShell
      padding="xl"
      navbar={
        showNavigation || !isMobile ? (
          <Navbar
            width={{ base: "100%", sm: 300 }}
            styles={{ root: { position: isMobile ? "absolute" : "relative" } }}
            height={"100vh"}
            p="xs"
          >
            <Flex
              justify={"flex-end"}
              p="xl"
              display={{ base: "flex", sm: "none" }}
            >
              <IconX onClick={toggle} />
            </Flex>
            <SideMenu />
          </Navbar>
        ) : null
      }
      header={
        <Header p="xs" height={{ base: "auto", sm: 100 }}>
          <Flex justify={"space-between"} align={"center"}>
            <Flex align={"center"} justify={"space-around"}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <IconMenu2 size="3rem" onClick={toggle} />
              </MediaQuery>

              <Image
                src="/images/logo-image.png"
                height={"80px"}
                style={{
                  objectFit: "cover",
                  width: "100px",
                }}
              />
            </Flex>
            <Flex justify={"flex-end"} align={"center"} gap={"20px"} mr={"xl"}>
              <Button
                leftIcon={<IconPlus size="1.5rem" />}
                sx={{
                  borderRadius: "20px",
                }}
              >
                Create team
              </Button>
              <UserMenu />
            </Flex>
          </Flex>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.blue[0],
          paddingLeft: 0,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
