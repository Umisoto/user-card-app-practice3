import React, { VFC, memo } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Button
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUsersList: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: VFC<Props> = memo(props => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUsersList,
    onClickSetting,
    onClickLogout
  } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xs" placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">
              Home
            </Button>
            <Button onClick={onClickUsersList} w="100%">
              Users List
            </Button>
            <Button onClick={onClickSetting} w="100%">
              Setting
            </Button>
            <Button onClick={onClickLogout} w="100%">
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
