import { useContext } from "react";
import logo from "../svgs/brandlogo.svg";
import { Ctx } from "../Context";

function Brand() {
  let state = useContext(Ctx).state.sideNavExpanded;
  let expanded = typeof state === "undefined" ? true : state;
  let brandClasses = expanded ? "animate-fadeIn" : "animate-fadeOut";
  return (
    <>
      <div className="flex flex-wrap mx-auto p-7 items-center gap-2">
        <img className="h-16" src={logo} alt="brand logo" />
        <span className={`${brandClasses} text-3xl`}>Brand</span>
      </div>
    </>
  );
}

export default Brand;
