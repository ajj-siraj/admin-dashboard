import {useState, useContext} from "react";
import {Ctx, Types} from "../Context";

function SideNav() {

  let [showNav, updateNav] = useState(true);
  let width = showNav ? "w-full col-span-2 p-10" : "w-0 hidden";
  const {dispatch} = useContext(Ctx);

  console.log(dispatch);

  function handleUpdateNav() {
    updateNav(!showNav);
    dispatch({type: Types.SIDE_NAV_EXPANDED, payload: !showNav})
  }
  return (
    <>
    <button className="absolute top-0 left-0 right-0 bottom-0 bg-blue-400" onClick={handleUpdateNav}>Click Me</button>
      <div className={`${width} bg-pink-300 h-screen transition-all`}>
        
        Side Nav
      </div>
    </>
  );
}

export default SideNav;
