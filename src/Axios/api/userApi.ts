import type { createUser, User } from "../type/user.types";
import axiosInstance from "./axiosInstance";

// get Users List
export const getUserList = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
};

//post user
export const postUser = async (user: createUser): Promise<User[]> => {
  const response = await axiosInstance.post("/users", user);
  return response.data;
};
