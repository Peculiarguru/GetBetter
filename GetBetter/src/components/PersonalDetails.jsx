import React, { useState } from "react";
import {
  Flex,
  Input,
  TextInput,
  Button,
  Text,
  PasswordInput,
} from "@mantine/core";

import { IconLock } from "@tabler/icons-react";

const PersonalDetails = ({ onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = () => {
    onRegister({ firstName, lastName, email, phone, password });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };
  return (
    <>
      <Flex>
        <TextInput
          label="FIRST NAME"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          mr={10}
          w={"100%"}
          withAsterisk
        />
        <TextInput
          label="LAST NAME"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          w={"100%"}
          withAsterisk
        />
      </Flex>

      <TextInput
        label="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="PHONE"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <PasswordInput
        label="PASSWORD"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<IconLock size="1rem" />}
        withAsterisk
      />
      <Button
        style={{ backgroundColor: "#566cff", borderRadius: "20px" }}
        onClick={handleRegisterUser}
      >
        Register
      </Button>

      <Text>
        By clicking this button, you agree to GetBetter's{" "}
        <a href="">Privacy Policy</a> and <a href="">Terms and conditions.</a>
      </Text>
    </>
  );
};

export default PersonalDetails;
