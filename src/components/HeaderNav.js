import { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
import avatar from "../svgs/brandlogo.svg";
import bell from "../svgs/navs/alarm-bell-outline.svg";
import msg from "../svgs/navs/chatting-oval-speech-bubbles.svg";

let sampleData = {
  notif: {
    data: [
      { content: "First Notification!", dateTime: new Date(`2021-07-14T14:50:28+00:00`) },
      { content: "Second Notification...", dateTime: new Date(`2021-06-14T14:50:28+00:00`) },
      { content: "Third Notification?", dateTime: new Date(`2020-06-14T14:50:28+00:00`) },
    ],
    link: "/notification",
    icon: bell,
  },
  msg: {
    data: [
      { content: "First Message!", dateTime: new Date(`2021-06-14T14:50:28+00:00`) },
      { content: "Second Message...", dateTime: new Date(`2021-06-14T14:50:28+00:00`) },
      { content: "Third Message?", dateTime: new Date(`2021-06-14T14:50:28+00:00`) },
    ],
    link: "/messages",
    icon: msg,
  },
  profile: {
    data: [
      { content: "First Message!", dateTime: new Date(`2021-07-14T14:50:28+00:00`) },
      { content: "Second Message...", dateTime: new Date(`2021-07-14T14:50:28+00:00`) },
      { content: "Third Message?", dateTime: new Date(`2021-07-14T14:50:28+00:00`) },
    ],
    link: "/profile",
    icon: avatar,
  },
};

function HeaderNav() {
  let navClasses = "p-5 text-center w-full m-auto";
  let [activeNav, setActive] = useState(null);

  return (
    <>
      <nav className="flex bg-white justify-between items-stretch mx-5 my-3 shadow-md rounded-full">
        <ul className="flex w-1/2 ml-8">
          <Link className={navClasses} to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link className={navClasses} to="/example">
            <li>Settings</li>
          </Link>
          <Link className={navClasses} to="/example">
            <li>Users</li>
          </Link>
        </ul>
        <ul className="flex items-stretch mr-8">
          <li className={navClasses}>
            <NavIcon
              type="notifications"
              data={sampleData.notif}
              onChildClick={() => setActive("notifications")}
              active={activeNav === "notifications" ? true : false}
              onChildBlur={() => setActive("")}
            />
          </li>
          <li className={navClasses}>
            <NavIcon
              type="messages"
              data={sampleData.msg}
              onChildClick={() => setActive("messages")}
              active={activeNav === "messages" ? true : false}
              onChildBlur={() => setActive("")}
            />
          </li>
          <li className={navClasses}>
            <NavIcon
              type="profile"
              data={sampleData.profile}
              onChildClick={() => setActive("profile")}
              active={activeNav === "profile" ? true : false}
              onChildBlur={() => setActive("")}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
