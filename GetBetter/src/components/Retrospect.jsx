import React from "react";
import DashboardLayout from "./DashboardLayout";
import Cards from "./Cards";
import { Flex } from "@mantine/core";
import { RetrospectCards } from "./RetrospectsCards";

const Retrospect = () => {
  return (
    <DashboardLayout>
      <Flex direction={"row"} gap={"sm"} wrap={"wrap"} justify={"center"}>
        {RetrospectCards.map((card) => {
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

export default Retrospect;
