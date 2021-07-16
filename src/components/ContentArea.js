import {useContext} from "react";
import {Ctx} from "../Context";
import HeaderNav from "./HeaderNav";

function ContentArea({view}) {
  let width = useContext(Ctx).state.sideNavExpanded ? "ml-56 w-5/6" : "ml-28 w-11/12"

  return (
    <>
      <div className={`${width} bg-white h-screen transition-all duration-300 justify-self-end`}>
        <HeaderNav />
        <div>
          {view}
        </div>
        
      </div>
    </>
  );
}

export default ContentArea;
