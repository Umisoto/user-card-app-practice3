import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const message = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      duration: 2000,
      position: "top"
    });
  }, []);

  return { message };
};
