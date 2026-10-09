import Box from "@mui/material/Box";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPhotos, getUserList } from "../api/userApi";

export const Users = () => {
  const { data: userList } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: () => getUserList(),
  });

  // const { data: photo } = useSuspenseQuery({
  //   queryKey: ["photos"],
  //   queryFn: getPhotos,
  // });

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
      {/* {photo.map((img) => {
        return (
          <div key={img.id}>
            <img src={img.url} />
          </div>
        );
      })} */}
    </Box>
  );
};
