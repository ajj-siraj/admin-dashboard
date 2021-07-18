import {useContext} from "react";
import {Ctx} from "../Context";
import HeaderNav from "./HeaderNav";

function ContentArea({view}) {

  let marginLeft = useContext(Ctx).state.sideNavExpanded ? "16.667%" : "8.333%"

  return (
    <>
      <div style={{marginLeft: marginLeft}} className={`bg-gray-100 w-full transition-all duration-300 justify-self-end`}>
        <HeaderNav />
        <div>
          {view}
        </div>
        
      </div>
    </>
  );
}

export default ContentArea;
