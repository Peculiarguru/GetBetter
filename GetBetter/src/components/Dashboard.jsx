import React, { useState, useEffect } from "react";
import { AppShell, Navbar, Header, Flex, Text, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import UserMenu from "./UserMenu";
import SideMenu from "./SideMenu";
import Cards from "./Cards";
import DashboardLayout from "./DashboardLayout";
import Retrospect from "./Retrospect";
import { RetrospectCards } from "./RetrospectsCards";
import ROUTES from "./routes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    const getRandomCards = (count) => {
      const shuffledCards = RetrospectCards.sort(() => Math.random() - 0.5);
      const selectedCards = shuffledCards.slice(0, count);
      return selectedCards;
    };

    const cards = getRandomCards(4);
    setRandomCards(cards);
  }, []);

  return (
    <DashboardLayout>
      <Flex justify={"space-between"} align={"center"}>
        <Text fw={700} m={"xl"} pl={"50px"} fz="xl">
          Retrospective Templates
        </Text>
        <Button
          pr={"60px"}
          variant="subtle"
          sx={{
            color: "#566cff",
            fontSize: "18px",
            "&:hover": {
              background: "none",
              textDecoration: "underline",
            },
          }}
          component={Link}
          to={ROUTES.retrospect}
        >
          See all{" "}
        </Button>
      </Flex>
      <Flex direction={"row"} gap={"sm"} wrap={"wrap"} justify={"center"}>
        {randomCards.map((card) => {
          return (
            <Cards
              key={card.title}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </Flex>
    </DashboardLayout>
  );
};

export default Dashboard;
