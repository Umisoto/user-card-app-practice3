import React, { VFC, memo } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  nickName: string;
  fullName: string;
  imageUrl: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo(props => {
  const { nickName, fullName, imageUrl, onClick } = props;

  return (
    <Box
      w={250}
      h={250}
      bg="white"
      textAlign="center"
      borderRadius="md"
      shadow="md"
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt="user's image"
        borderRadius="100%"
        mx="auto"
        p={4}
      />
      <Stack>
        <Text fontWeight="bold">{nickName}</Text>
        <Text fontSize="sm" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
