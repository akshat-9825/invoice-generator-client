import { useGetUserQuery } from "../apis/user";
import Cookies from "universal-cookie";

const useUser = (fetchUser = true) => {
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("token") || "";

  const { data, refetch } = useGetUserQuery({ token }, { skip: !fetchUser });

  return {
    user: token && data ? data : { name: "", email: "" },
    refetch,
  };
};

export default useUser;
