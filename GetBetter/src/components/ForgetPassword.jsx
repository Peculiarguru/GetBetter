import React, { useState } from "react";

import {
  Box,
  Flex,
  Image,
  Stack,
  rem,
  Divider,
  Input,
  TextInput,
  Button,
  Text,
  PasswordInput,
  Center,
  Title,
  MediaQuery,
} from "@mantine/core";

import SocialButton from "./SocialButton";

import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconLock,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ROUTES from "./routes";
import { notifications } from "@mantine/notifications";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    const fetchedStoredData = localStorage.getItem("userDetails");
    console.log(fetchedStoredData);
    if (fetchedStoredData) {
      const userList = JSON.parse(fetchedStoredData);
      console.log("yes find", userList);

      const matchedUser = userList.find((user) => {
        console.log(user.email, "email");
        return user.email === email;
      });
      console.log(matchedUser, "matched");
      if (matchedUser) {
        notifications.show({
          title: "Success",
          message: "Email sent with reset password instructions",
          color: "green",
        });
      } else {
        notifications.show({
          title: "Failed",
          message: "No user with that email found.",
          color: "red",
        });
      }
    }
    setEmail("");
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

        <Stack
          style={{ minWidth: "50%" }}
          align="center"
          justify="center"
          px="xl"
        >
          <Flex align="center" direction="column" w={{ base: "100%", sm: 400 }}>
            <Title mb={"xl"}>Reset your password</Title>
            <Text mb={"xl"}>
              We'll email you instructions to reset your password.
            </Text>
            <Stack spacing={20} w={"100%"}>
              <TextInput
                label="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Flex justify="center">
                <Button
                  component={Link}
                  style={{
                    backgroundColor: "#566cff",
                    borderRadius: "20px",
                    width: "50%",
                  }}
                  onClick={handleResetPassword}
                >
                  Submit
                </Button>
              </Flex>

              <Button
                variant="subtle"
                component={Link}
                to={ROUTES.home}
                sx={{
                  color: "#566cff",
                  "&:hover": {
                    background: "none",
                    textDecoration: "underline",
                  },
                }}
              >
                Back to Log in{" "}
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ForgetPassword;
