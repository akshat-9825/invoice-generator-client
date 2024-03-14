import { useAppSelector } from ".";
import { useGetUserQuery } from "../apis/user";
import Cookies from "universal-cookie";
import { selectToken } from "../features/Authentication/authSlice";

const useUser = (fetchUser = true) => {
  const cookies = new Cookies(null, { path: "/" });
  const localToken = useAppSelector(selectToken);
  const token = localToken || cookies.get("token") || "";

  const { data, refetch } = useGetUserQuery({ token }, { skip: !fetchUser });

  return {
    user: token && data ? data : { name: "", email: "" },
    refetch,
  };
};

export default useUser;
