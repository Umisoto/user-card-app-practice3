import React, { VFC, memo, useEffect, useCallback } from "react";
import { UserCard } from "../../organisms/user/UserCard";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { Wrap, WrapItem, Spinner, Flex, useDisclosure } from "@chakra-ui/react";
import { UserDetailModal } from "../../organisms/modal/UserDetailModal";
import { useSelectUser } from "../../../hooks/useSelectUser";
import { useLoginUserContext } from "../../../hooks/useLoginUserContext";

export const UserManagement: VFC = memo(() => {
  const { fetchUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectUser, selectedUser } = useSelectUser();
  const {loginUser}=useLoginUserContext()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);

  const onClickModalOpen = useCallback((userId: number) => {
    selectUser({ userId, users, onOpen });
  }, [users]);

  return (
    <>
      {loading ? (
        <Flex justify="center" alignItems="center" h="100vh">
          <Spinner />
        </Flex>
      ) : (
        <Wrap m={{ base: 6, md: 10 }} spacing={4} justify="center">
          {users.map(user => (
            <WrapItem key={user.id}>
              <UserCard
                nickName={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random/150x150"
                onClick={() => onClickModalOpen(user.id)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
