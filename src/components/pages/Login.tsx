import React, { VFC, memo, useState, ChangeEvent } from "react";
import { Box, Heading, Divider, Stack, Input, Flex } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState<string>("");
  const { userCheck, loading } = useAuth();

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClickLoginButton = () => {
    userCheck(userId);
  };

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box w="sm" bg="white" borderRadius="md" shadow="md" p={4}>
        <Heading as="h1" textAlign="center" size="lg">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} mx={10} my={4}>
          <Input onChange={onChangeLoginInput} placeholder="User ID" />
          <PrimaryButton
            onClick={onClickLoginButton}
            disabled={userId === "" || userId === "/" || loading}
            isLoading={loading}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
