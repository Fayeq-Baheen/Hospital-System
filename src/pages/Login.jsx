import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-100 border border-gray-400 rounded-2xl p-10 shadow-2xl">
        <p className="text-xl font-bold my-1">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-sm font-light">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        <form className="my-4" action="#">
          {state === "Sign Up" && (
            <div>
              <label className="font-light text-sm" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="block border border-gray-400 my-1 rounded w-full"
                type="text"
                name="full-name"
                id="full-name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}
          <label className="font-light text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="block border border-gray-400 my-1 rounded w-full"
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="font-light text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="block border border-gray-400 my-1 rounded w-full"
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="text-center w-full bg-[#5f6fff] text-white rounded py-2 my-2"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-xs font-light mt-3">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="underline text-[#5f6fff] cursor-pointer"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-xs font-light mt-3">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="underline text-[#5f6fff] cursor-pointer"
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
