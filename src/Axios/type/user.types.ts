export type User = {
  id: number;
  name: string;
  email: string;
  userName: string;
};

export type createUser = {
  name: string;
  userName: string;
  email: string;
};

export type photo = {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
};
