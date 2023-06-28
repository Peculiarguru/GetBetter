import React from "react";

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

const ForgetPassword = () => {
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
              <TextInput label="EMAIL" />
              <Flex justify="center">
                <Button
                  component={Link}
                  style={{
                    backgroundColor: "#566cff",
                    borderRadius: "20px",
                    width: "50%",
                  }}
                >
                  Register
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
