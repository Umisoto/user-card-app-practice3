import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUserContext } from "./useLoginUserContext";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { message } = useMessage();
  const { setLoginUser } = useLoginUserContext();

  const userCheck = useCallback((userId: string) => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          message({ title: "Login succeeded", status: "success" });
          navigate("./home");
        } else {
          setLoading(false);
          message({ title: "User not found", status: "error" });
        }
      })
      .catch(() => {
        setLoading(false);
        message({ title: "Cannot login", status: "error" });
      });
  }, []);

  return { userCheck, loading };
};
