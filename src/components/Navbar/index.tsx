import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectRefetch,
  setRefetch,
} from "../../features/Authentication/authSlice";
import { useLogoutMutation } from "../../apis/authentication";
import { useEffect } from "react";

const Navbar = () => {
  const { user, refetch } = useUser();
  const refetchStatus = useAppSelector(selectRefetch);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (refetchStatus === true) {
      refetch();
      dispatch(setRefetch(false));
    }
  }, [refetchStatus, refetch, dispatch]);

  return (
    <div className="md:h-16 h-14 bg-white flex items-center justify-center print:hidden">
      <div className="flex flex-row justify-between items-center max-w-[1280px] w-full p-4">
        <div className="text-lg md:text-2xl">Invoice Generator</div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center cursor-pointer text-sm md:text-lg">
            {user.name ? "Hi, " + user.name : <Link to="/login">Login</Link>}
          </div>
          <button
            className="cursor-pointer border text-sm md:text-lg border-gray-500 rounded-[4px] py-1 px-2 hover:bg-gray-100 transition-all"
            onClick={() => {
              if (user.name) {
                logout();
                dispatch(setRefetch(true));
              }
            }}>
            {user.name ? "Logout" : <Link to="/register">Register</Link>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
