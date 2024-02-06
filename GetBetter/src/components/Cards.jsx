import React from "react";
import { Card, Flex, Image, Text, Box } from "@mantine/core";

const Cards = ({ imageSrc, title, description }) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      sx={{ width: 280, height: 420 }}
    >
      <Card.Section>
        <Image src={imageSrc} height={160} alt="Card Image" />
      </Card.Section>

      <Text fw={700} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
};

export default Cards;
