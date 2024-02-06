import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  rem,
  Divider,
  Button,
  Title,
  Text,
} from "@mantine/core";
import SocialButton from "./SocialButton";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import PersonalDetails from "./PersonalDetails";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "./routes";
import { notifications } from "@mantine/notifications";

const Register = () => {
  const navigate = useNavigate();
  const handleUserRegister = (userDetails) => {
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.password
    ) {
      notifications.show({
        title: "Error",
        message: "Please fill in all the required fields!",
        color: "red",
      });
      return;
    }

    const storedData = localStorage.getItem("userDetails");

    let userInputList = [];
    if (storedData) {
      userInputList = JSON.parse(storedData);
    }

    userInputList.push(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userInputList));

    notifications.show({
      title: "Registration successful!",
      message: "Thank you!!",
      color: "green",
    });
    navigate(ROUTES.home);
  };

  return (
    <Box>
      <Flex justify={"flex-end"} direction={{ base: "column", sm: "row" }}>
        <Stack style={{ flex: 1 }} display={{ base: "none", sm: "flex" }}>
          <Image
            src="/images/img1.png"
            height={"100vh"}
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Stack>

        <Stack style={{ minWidth: "50%" }} align="center" px="xl" mt="xl">
          <Flex align="center" direction="column" w={{ base: "100%", sm: 400 }}>
            <Title mb={"md"}>Register</Title>
            <Text mb={"md"}>
              Already got a GetBetter account?{" "}
              <Button
                variant="subtle"
                component={Link}
                to={ROUTES.home}
                sx={{
                  color: "#566cff",
                  paddingLeft: 0,
                  "&:hover": {
                    background: "none",
                    textDecoration: "underline",
                  },
                }}
              >
                Login in{" "}
              </Button>{" "}
            </Text>
            <Stack spacing="xl" w={"100%"}>
              <SocialButton
                backgroundColor="transparent"
                color="black"
                icon={<IconBrandGoogle size={rem(20)} />}
              >
                {" "}
                Login with Google
              </SocialButton>
              <SocialButton
                backgroundColor="#3a42cd"
                color="white"
                icon={<IconBrandFacebook />}
              >
                {" "}
                Login with Facebook
              </SocialButton>
              <Divider my="md" label="OR" labelPosition="center" />
              <PersonalDetails onRegister={handleUserRegister} />
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Register;
