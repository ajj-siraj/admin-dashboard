import { Link } from "react-router-dom";

function HeaderNav() {
  let navClasses = "p-5 text-center w-full m-auto";
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
          <li className={navClasses}>Test</li>
          <li className={navClasses}>Test</li>
          <li className={navClasses}>Test</li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
