import type { createUser, photo, User } from "../type/user.types";
import axiosInstance from "./axiosInstance";

// get Users List
export const getUserList = async (id?: string | null): Promise<User[]> => {
  const url = id == null ? "/users" : `/users/${id}`;
  const response = await axiosInstance.get<User[] | User>(url, {
    headers: {
      Authorization: "",
    },
  });
  return Array.isArray(response.data) ? response.data : [response.data];
};

//post user
export const postUser = async (user: createUser): Promise<User[]> => {
  const response = await axiosInstance.post("/users", user);
  return response.data;
};

// get all the photos
export const getPhotos = async (): Promise<photo[]> => {
  const response = await axiosInstance.get("/photos");
  return response.data;
};
