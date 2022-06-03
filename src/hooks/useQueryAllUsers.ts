import axios from "axios";
import { User } from "../types/api/users";
import { useQuery } from "react-query";

const fetchUsers=async()=>{
    const {data}=await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    return data
}

export const useQueryAllUsers=()=>{
    return useQuery<User[], Error>({
        queryKey: "users",
        queryFn: fetchUsers,
        staleTime: 0
    })
}