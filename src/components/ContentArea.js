import {useContext} from "react";
import {Ctx} from "../Context";
import HeaderNav from "./HeaderNav";

function ContentArea({view}) {
  let width = useContext(Ctx).state.sideNavExpanded ? "w-5/6" : "w-11/12"

  return (
    <>
      <div className={`${width} bg-purple-500 h-screen transition-all duration-300`}>
        <HeaderNav />
        <div>
          {view}
        </div>
        
      </div>
    </>
  );
}

export default ContentArea;
