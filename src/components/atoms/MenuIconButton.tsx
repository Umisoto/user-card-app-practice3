import React, { VFC, memo } from "react";
import { Icon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onClick: () => void;
};

export const MenuIconButton: VFC<Props> = memo(props => {
  const { onClick } = props;
  return (
    <Icon
      display={{ base: "block", md: "none" }}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <HamburgerIcon />
    </Icon>
  );
});
