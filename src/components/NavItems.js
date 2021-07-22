import { Ctx } from "../Context";
import { useContext } from "react";
import {useHistory} from "react-router-dom";

function NavItems({ children }) {
  let history = useHistory();
  let state = useContext(Ctx).state.sideNavExpanded;
  let expanded = typeof state === "undefined" ? true : state;
  let titleClasses = expanded ? "animate-fadeIn" : "animate-fadeOut hidden";
  let navClasses = expanded ? "animate-fadeIn" : "animate-fadeOut hidden";
  let imgClasses = expanded ? "" : "h-8 m-2 mx-auto";

  function handleNavigate(route) {
    history.push(route)
    window.scrollTo(0,0);
  }

  return (
    <>
      {children.map((section, secIdx) => (
        <section key={`section-${secIdx}`}>
          <div
            className={`${titleClasses} transition-all duration-1000 p-5 text-gray-400 uppercase`}
          >
            {section.title}
          </div>
          {section.navs.map((nav, navIdx) => (
            <div
              className="flex p-3 hover:bg-purple-500 hover:cursor-pointer"
              key={`nav-${navIdx}`}
              onClick={() => handleNavigate(nav.route)}
            >
              <span className={!expanded ? "mx-auto" : undefined}>
                <img
                  src={nav.icon}
                  className={`${imgClasses} h-6 mr-2 ml-5 transition-all filter invert`}
                  alt={nav.title + " icon"}
                />
              </span>
              <div className={`${navClasses} transition-all`}>{nav.title}</div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

export default NavItems;
