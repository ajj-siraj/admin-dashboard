import {useContext} from "react";
import {Ctx} from "../Context";

function ContentArea() {
  let width = useContext(Ctx).state.sideNavExpanded ? "col-span-10" : "col-span-12"
  return (
    <>
      <div className={`${width} w-full p-5 bg-purple-500 h-screen`}>
        CONTENT
      </div>
    </>
  );
}

export default ContentArea;
