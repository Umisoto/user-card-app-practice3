import React, { memo, VFC, useState, useEffect, ChangeEvent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex
} from "@chakra-ui/react";
import { User } from "../../../types/api/users";
import { PrimaryButton } from "../../atoms/PrimaryButton";

type Props = {
    user: User | null;
    isAdmin?: boolean;
    isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo(props => {
  const { user, isAdmin=false, isOpen, onClose} = props;
  const [nickName, setNickName]=useState("")
  const [fullName, setFullName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")

  useEffect(()=>{
    setNickName(user?.username ?? "")
    setFullName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  }, [user])

    const onChangeNickName=(e: ChangeEvent<HTMLInputElement>)=>{
        setNickName(e.target.value)
    }
    const onChangeFullName=(e: ChangeEvent<HTMLInputElement>)=>{
        setFullName(e.target.value)
    }
    const onChangeEmail=(e: ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const onChangePhone=(e: ChangeEvent<HTMLInputElement>)=>{
        setPhone(e.target.value)
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} >
      <ModalOverlay>
        <ModalContent >
          <ModalHeader>User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4} mb={2} >
            <Stack>
              <FormControl>
                <FormLabel>Nick Name</FormLabel>
                <Input value={nickName} isReadOnly={!isAdmin} focusBorderColor="none" onChange={onChangeNickName} />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={fullName} isReadOnly={!isAdmin} focusBorderColor="none" onChange={onChangeFullName} />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value={email} isReadOnly={!isAdmin} focusBorderColor="none" onChange={onChangeEmail} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} isReadOnly={!isAdmin} focusBorderColor="none" onChange={onChangePhone} />
              </FormControl>
              {
                  isAdmin &&
                  <Flex justify="flex-end" >
                  <PrimaryButton onClick={alert} disabled={!isAdmin} isLoading={false} >Attribute</PrimaryButton>
                  </Flex>
                  }
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
