import { useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Ctx, Types } from "../Context";
import Brand from "./Brand";
import NavItems from "./NavItems";
import collapseIcon from "../svgs/sidenav-expand-icon.svg";

//loading all nav svgs in the folder for ease of demonstration
const reqSvgs = require.context("../svgs/navs", true, /\.svg$/);
const paths = reqSvgs.keys();

const svgs = paths.map((path) => reqSvgs(path));

function SideNav() {
  let [showNav, updateNav] = useState(true);
  let [windowHeight, setHeight] = useState(window.innerHeight);
  let width = showNav ? "w-1/6" : "w-1/12";
  let iconRotate = showNav ? "transform rotate-45" : "";
  const { dispatch } = useContext(Ctx);
  let sections = [
    {
      title: "System",
      navs: [
        { icon: svgs[0].default, title: "Dashboard", route: "/dashboard" },
        { icon: svgs[1].default, title: "System", route: "/example" },
        { icon: svgs[2].default, title: "Analytics", route: "/example" },
      ],
    },
    {
      title: "Section 2",
      navs: [
        { icon: svgs[3].default, title: "Nav 1", route: "/example" },
        { icon: svgs[4].default, title: "Nav 1", route: "/example" },
        { icon: svgs[5].default, title: "Nav 1", route: "/example" },
      ],
    },
    {
      title: "Section 3",
      navs: [
        { icon: svgs[6].default, title: "Nav 1", route: "/example" },
        { icon: svgs[7].default, title: "Nav 1", route: "/example" },
        { icon: svgs[8].default, title: "Nav 1", route: "/example" },
      ],
    },
    {
      title: "Section 4",
      navs: [
        { icon: svgs[9].default, title: "Nav 1", route: "/example" },
        { icon: svgs[10].default, title: "Nav 1", route: "/example" },
        { icon: svgs[11].default, title: "Nav 1", route: "/example" },
      ],
    },
  ];

  function handleUpdateNav() {
    updateNav(!showNav);
    dispatch({ type: Types.SIDE_NAV_EXPANDED, payload: !showNav });
  }

  function updateDimensions() {
    setHeight(window.innerHeight);
  }

  return (
    <div className={`${width} fixed bg-gray-700 text-white transition-all duration-300 overflow-y-auto`}>
      <Scrollbars
        autoHide
        autoHeight
        autoHeightMin={windowHeight}
        onUpdate={updateDimensions}
        renderThumbVertical={(props) => (
          <div {...props} className="bg-gray-400 rounded-md opacity-60" />
        )}
      >
        <div className="flex flex-col mt-10">
          <button
            className=" bg-gray-700 p-5 transition-all hover:bg-gray-500 px-3 rounded-lg"
            onClick={handleUpdateNav}
          >
            <img
              className={`${iconRotate} h-6 mx-auto transition-all duration-300`}
              src={collapseIcon}
              alt="collapse icon"
            />
          </button>
          <Brand />

          <NavItems>{sections}</NavItems>
        </div>
      </Scrollbars>
    </div>
  );
}

export default SideNav;
