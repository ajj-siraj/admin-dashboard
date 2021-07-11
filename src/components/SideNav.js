import { useState, useContext } from "react";
import { Ctx, Types } from "../Context";

import Brand from "./Brand";
import NavItems from "./NavItems";

//loading all svgs in the folder for ease of demonstration
const reqSvgs = require.context ( '../svgs', true, /\.svg$/ )
const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )

function SideNav() {
  let [showNav, updateNav] = useState(true);
  let width = showNav ? "w-1/6" : "w-1/12";
  const { dispatch } = useContext(Ctx);
  let sections = [
    {
      title: "Section 1",
      navs: [
        { icon: svgs[0].default, title: "Nav 1" },
        { icon: svgs[1].default, title: "Nav 1" },
        { icon: svgs[2].default, title: "Nav 1" },
      ],
    },
    {
      title: "Section 2",
      navs: [
        { icon: svgs[3].default, title: "Nav 1" },
        { icon: svgs[4].default, title: "Nav 1" },
        { icon: svgs[5].default, title: "Nav 1" },
      ],
    },
    {
      title: "Section 3",
      navs: [
        { icon: svgs[6].default, title: "Nav 1" },
        { icon: svgs[7].default, title: "Nav 1" },
        { icon: svgs[8].default, title: "Nav 1" },
      ],
    },
    {
      title: "Section 4",
      navs: [
        { icon: svgs[9].default, title: "Nav 1" },
        { icon: svgs[10].default, title: "Nav 1" },
        { icon: svgs[11].default, title: "Nav 1" },
      ],
    },
  ];

  function handleUpdateNav() {
    updateNav(!showNav);
    dispatch({ type: Types.SIDE_NAV_EXPANDED, payload: !showNav });
  }
  console.log(showNav);
  return (
    <>
      <div className={`${width} bg-gray-700 text-white h-screen transition-all overflow-y-auto`}>
        <div className="flex flex-col">
          <button className=" bg-blue-400" onClick={handleUpdateNav}>
            Click Me
          </button>
          <Brand />
          <NavItems>{sections}</NavItems>
        </div>
      </div>
    </>
  );
}

export default SideNav;
