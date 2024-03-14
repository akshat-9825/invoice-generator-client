import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

import { AuthDataType, AuthTexts, InputField } from "../../utils/types";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../apis/authentication";

import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../hooks";
import { setRefetch } from "./authSlice";

const authTexts: AuthTexts = {
  login: {
    message: "Don't have an account?",
    action: "Create an account",
    to: "/register",
  },
  register: {
    message: "Already have an account?",
    action: "Login",
    to: "/login",
  },
};

const inputFields: InputField[] = [
  {
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Enter your Name",
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Enter your Email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your Password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirm_password",
    placeholder: "Confirm your Password",
  },
];

const Authentication: React.FC<{ type: string }> = ({ type }) => {
  const navigate = useNavigate();
  const { message, action, to } = authTexts[type];
  const [data, setData] = useState<AuthDataType>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      toast.error("Invalid Email!", {
        theme: "dark",
      });
      return;
    }
    if (data.password.length < 8) {
      toast.error("Password must be at least 8 characters!", {
        theme: "dark",
      });
      return;
    }
    if (type === "register" && data.password !== data.confirm_password) {
      toast.error("Passwords do not match!", {
        theme: "dark",
      });
      return;
    }

    const credentials = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    };

    if (type === "login") {
      try {
        await toast.promise(
          login(credentials).unwrap(),
          {
            pending: "Logging in...",
            success: "Login Successful!",
          },
          {
            theme: "dark",
          }
        );
        navigate("/");
        dispatch(setRefetch(true));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.data.errorMessage, {
          theme: "dark",
        });
      }
    } else {
      try {
        await toast.promise(
          register(credentials).unwrap(),
          {
            pending: "Creating an account...",
            success: "Account Created! Please Login",
          },
          {
            theme: "dark",
          }
        );
        navigate("/login");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.data.errorMessage, {
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="flex justify-center p-4 h-full bg-gray-200">
      <ToastContainer />
      <div className="mt-12 max-w-[640px] w-full bg-white p-4 rounded-[4px] h-fit">
        <div className="text-2xl font-medium">
          Welcome to the Invoice Generator,
          <br />
          {type === "login" ? "Sign In to Continue." : "Create an account."}
        </div>
        <div className="mt-6">
          <p>
            {message}{" "}
            <Link to={to} className="underline font-medium">
              {action}
            </Link>
          </p>
        </div>
        <form className="mt-4" onSubmit={onSubmit}>
          {inputFields.map(
            (field, index) =>
              (type === "register" ||
                field.name === "email" ||
                field.name === "password") && (
                <div key={index} className="mt-3">
                  <p>{field.label}</p>
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="mt-1 px-2 border border-black bg-gray-100 h-10 w-full"
                  />
                </div>
              )
          )}
          <button className="w-full py-2 mt-8 mb-4 bg-black text-white hover:bg-slate-900 transition-all">
            {type === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
