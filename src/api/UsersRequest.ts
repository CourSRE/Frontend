import { baseAxios } from "@/configs";

export const getUserRankApi = async () => {
  return await baseAxios({
    method: "GET",
    url: "/api/users/rank",
  })
};

export const getUsersApi = async () => {
  return await baseAxios({
    method: "GET",
    url: "/api/users",
  })
};
