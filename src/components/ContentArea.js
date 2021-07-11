import {useContext} from "react";
import {Ctx} from "../Context";

function ContentArea() {
  let width = useContext(Ctx).state.sideNavExpanded ? "w-5/6" : "w-11/12"
  return (
    <>
      <div className={`${width} p-5 bg-purple-500 h-screen transition-all duration-300`}>
        CONTENT
      </div>
    </>
  );
}

export default ContentArea;
