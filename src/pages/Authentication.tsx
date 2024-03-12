import { Link } from "react-router-dom";

import { AuthTexts } from "../utils/types";

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

const Authentication: React.FC<{ type: string }> = ({ type }) => {
  const { message, action, to } = authTexts[type];

  return (
    <div className="flex justify-center p-4">
      <div className="mt-12 max-w-[640px] w-full bg-white p-4 rounded-[4px] ">
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
      </div>
    </div>
  );
};

export default Authentication;
