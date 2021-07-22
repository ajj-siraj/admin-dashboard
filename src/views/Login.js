import { useContext, useState } from "react";
import { Ctx, Types } from "../Context";
import { useHistory } from "react-router-dom";
import bgImg from "../imgs/login-background.jpg";
import cogoToast from "cogo-toast";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let {dispatch, state} = useContext(Ctx)
  let loggedIn = state.loggedIn ? state.loggedIn : false;
  let history = useHistory();

  let redirectError = (
    <>
      <div className="rounded-md shadow-md bg-gray-300 p-10 ">
        You have already logged in. You will now return to the Dashboard.
      </div>
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if(username === "demoadmin" && password==="demopassword"){
      cogoToast.success("Logged in successfully");
      dispatch({type: Types.LOGIN_SUBMIT})
      history.push("/")
    } else {
      cogoToast.error("Invalid credentials.")
    }
  }

  function setInput(e){
    let {name, value} = e.target
    let obj = () => ({
      username: () => setUsername(value),
      password: () => setPassword(value)
    }[name]());
    obj(); //changed to a function to avoid "unused variable" warning
  }

  return (
    <div
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        
      }}
    >
      <div className="flex w-full justify-center m-auto h-full min-h-screen items-center backdrop-filter backdrop-blur-lg backdrop-hue-rotate-180">
        {loggedIn ? (
          redirectError
        ) : (
          <div className="flex flex-col text-center w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl shadow-md text-shadow text-white bg-gray-300 p-10 backdrop-filter backdrop-blur-sm bg-opacity-50">
            <h1 className="font-semibold text-shadow-md text-xl">Enter Your Login Information</h1>
            <div className="text-blue-100 text-md">
              <pre>Demo Login -- Username: demoadmin, Password: demopassword</pre>
            </div>
            <form onSubmit={handleSubmit} className="flex-1">
              <div className="flex flex-col mx-auto">
                <div className="flex p-5 justify-between">
                  <label className="p-5">Username</label>
                  <input
                    className="pl-5 w-full rounded-xl text-gray-800"
                    type="text"
                    name="username"
                    placeholder="John Doe"
                    value={username}
                    onChange={setInput}
                  />
                </div>
                <div className="flex p-5 justify-between">
                  <label className="p-5">Password</label>
                  <input
                    className="pl-5 w-full rounded-xl text-gray-800"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={setInput}
                  />
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-700 w-full md:w-1/2 p-3 rounded-lg text-xl">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
