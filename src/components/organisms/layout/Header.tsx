import React, { VFC, memo } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/MenuIconButton";
import { useNavigate } from "react-router";
import { MenuDrawer } from "../../../molecules/MenuDrawer";
import { useMessage } from "../../../hooks/useMessage";

export const Header: VFC = memo(() => {
  const navigate = useNavigate();
  const { message } = useMessage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHome = () => {
    onClose();
    navigate("/home");
  };
  const onClickUsersList = () => {
    onClose();
    navigate("/home/user_management");
  };
  const onClickSetting = () => {
    onClose();
    navigate("/home/setting");
  };
  const onClickLogout = () => {
    message({ title: "Logged out", status: "success" });
    navigate("/");
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        alignItems="center"
        color="gray.50"
        p={{ base: 3, md: 5 }}
        justify="space-between"
      >
        <Flex as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h2"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            User Management App
          </Heading>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} fontSize="sm" flexGrow={2}>
          <Box pr={4}>
            <Link onClick={onClickUsersList}>Users list</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickSetting}>Setting</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickLogout}>Logout</Link>
          </Box>
        </Flex>
        <MenuIconButton onClick={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUsersList={onClickUsersList}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
