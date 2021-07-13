import { useState } from "react";

function NavIcon({ type, data, active, onChildClick, onChildBlur }) {
  let dropdownClasses = active ? "w-40 animate-fadeIn" : "w-0 h-0 animate-fadeOut";

  let dropdownItems = data?.data?.map((msg, idx) => {
    return <div key={`dd-msg-${idx}`}>{msg.content}</div>;
  });

  return (
    <>
      <div className="relative cursor-pointer" onClick={onChildClick} onBlur={onChildBlur} tabIndex={0}>
        <span className="absolute bg-red-600 text-gray-100 left-1/2 -top-1/4 w-5 rounded-full text-xs">
          {3}
        </span>
        <img className="h-6" src={data.icon} alt={`navicon-${type}`} />
        <div
          className={`${dropdownClasses} absolute flex flex-col top-11/12 right-1 transition-all p-5 bg-yellow-200 rounded-lg drop-shadow-lg`}
        >
          {dropdownItems}
        </div>
      </div>
    </>
  );
}

export default NavIcon;
