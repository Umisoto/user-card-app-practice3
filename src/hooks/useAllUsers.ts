import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/users";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { message } = useMessage();

  const fetchUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(() =>
        message({ title: "failed to fetch users info", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { fetchUsers, users, loading };
};
