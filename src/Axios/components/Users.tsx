import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { User } from "../type/user.types";

import { getUserList } from "../api/userApi";

export const Users = () => {
  const [userList, setUserList] = useState<User[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getUserList();
        setUserList(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <Box>
        <div>Loadding...</div>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <div>Loadding...</div>
      </Box>
    );
  }

  return (
    <Box>
      {userList?.map((user) => {
        return (
          <div key={user.id} className="p-2">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </Box>
  );
};
