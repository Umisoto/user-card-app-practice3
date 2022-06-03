import React, { VFC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
};

export const PrimaryButton: VFC<Props> = memo(props => {
  const { children, onClick, disabled, isLoading } = props;

  return (
    <Button
      bg="teal.500"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
});
