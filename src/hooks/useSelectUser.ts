import { useCallback, useState } from "react";
import { User } from "../types/api/users";
import { useMessage } from "./useMessage";

type Props = {
  userId: number;
  // users: Array<User>;
  data: Array<User> | undefined;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { message } = useMessage();

  const selectUser = useCallback((props: Props) => {
    // const { userId, users, onOpen } = props;
    const { userId, data, onOpen } = props;

    // const targetUser = users.find(user => user.id === userId);
    const targetUser = data?.find((user: any) => user.id === userId);
    if (targetUser) {
      setSelectedUser(targetUser);
      onOpen();
    } else {
      message({
        title: "Selected user does not have any info",
        status: "error"
      });
    }
  }, []);

  return { selectUser, selectedUser };
};
