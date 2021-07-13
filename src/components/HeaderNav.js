import { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
import avatar from "../svgs/brandlogo.svg";
import bell from "../svgs/navs/alarm-bell-outline.svg";
import msg from "../svgs/navs/chatting-oval-speech-bubbles.svg";

let sampleData = {
  notif: {
    data: [
      { content: "First Notification!", dateTime: new Date() },
      { content: "Second Notification...", dateTime: new Date() },
      { content: "Third Notification?", dateTime: new Date() },
    ],
    link: "/notification",
    icon: bell,
  },
  msg: {
    data: [
      { content: "First Message!", dateTime: new Date() },
      { content: "Second Message...", dateTime: new Date() },
      { content: "Third Message?", dateTime: new Date() },
    ],
    link: "/messages",
    icon: msg,
  },
  profile: {
    data: [
      { content: "First Message!", dateTime: new Date() },
      { content: "Second Message...", dateTime: new Date() },
      { content: "Third Message?", dateTime: new Date() },
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
      <nav className="flex bg-gray-100 justify-between items-stretch shadow-lg m-2 rounded-full">
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
            />
          </li>
          <li className={navClasses}>
            <NavIcon
              type="messages"
              data={sampleData.msg}
              onChildClick={() => setActive("messages")}
              active={activeNav === "messages" ? true : false}
            />
          </li>
          <li className={navClasses}>
            <NavIcon
              type="profile"
              data={sampleData.profile}
              onChildClick={() => setActive("profile")}
              active={activeNav === "profile" ? true : false}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
