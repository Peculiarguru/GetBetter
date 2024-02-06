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
  Title,
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
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedData = localStorage.getItem("userDetails");
    if (storedData) {
      const userList = JSON.parse(storedData);
      const matchedUser = userList.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        console.log("match", matchedUser);
        setEmail("");
        setPassword("");
        localStorage.setItem("currentData", JSON.stringify(matchedUser));
        window.location.href = ROUTES.dashboard;
      } else {
        notifications.show({
          title: "Error",
          message: "Invalid email or password. Please try again!",
          color: "red",
        });
      }
    }
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
            <Title mb={10}>Log in</Title>
            <Text mb={10}>
              Need a GetBetter account?{" "}
              <Button
                variant="subtle"
                component={Link}
                to={ROUTES.register}
                sx={{
                  color: "#566cff",
                  paddingLeft: 0,
                  "&:hover": {
                    background: "none",
                    textDecoration: "underline",
                  },
                }}
              >
                Register{" "}
              </Button>{" "}
            </Text>
            <Stack spacing={20} w={"100%"}>
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
              <TextInput
                label="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                withAsterisk
              />
              <PasswordInput
                label="Your password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                withAsterisk
                icon={<IconLock size="1rem" />}
              />
              <Button
                component={Link}
                style={{
                  backgroundColor: "#566cff",
                  borderRadius: "20px",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                variant="subtle"
                component={Link}
                to={ROUTES.password}
                sx={{
                  color: "#566cff",
                  "&:hover": {
                    background: "none",
                    textDecoration: "underline",
                  },
                }}
              >
                Forget Password?{" "}
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
