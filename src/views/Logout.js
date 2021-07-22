import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import {Ctx, Types} from "../Context";

import bgImg from "../imgs/login-background.jpg";

function Logout() {
  let history = useHistory();
  let {dispatch} = useContext(Ctx);

  useEffect(() => {
    setTimeout(() => dispatch({type: Types.LOGOUT_SUBMIT, loggingOut: false}), 3000)
  }, [history, dispatch]);

  return (
    <div
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-full justify-center m-auto h-full min-h-screen items-center">
        <div className="flex flex-col text-center w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl shadow-md text-shadow text-white bg-gray-300 p-10 backdrop-filter backdrop-blur-sm bg-opacity-50">
          <p>You have been logged out, please wait while you are redirected.</p>
        </div>
      </div>
    </div>
  );
}

export default Logout;
