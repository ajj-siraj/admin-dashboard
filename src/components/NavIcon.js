import {getTimeElapsed} from "../util";

function NavIcon({ type, data, active, onChildClick, onChildBlur }) {
  let dropdownClasses = active ? "w-64 animate-fadeIn2" : "w-0 h-0 animate-fadeOut";
  let length = data?.data?.length || 0;

  let dropdownItems = data?.data?.map((msg, idx) => {
    let border = "";
    let rounded = "";

    if (idx === 0) {
      rounded += "rounded-t-lg ";
    }
    if (length === idx + 1) {
      rounded += "rounded-b-lg ";
    } else {
      border = "border-b-2";
    }
    return (
      <div
        className={`relative p-3 pb-8 text-left text-sm ${border} ${rounded} hover:bg-gray-200`}
        key={`dd-msg-${idx}`}
      >
        <span className={"absolute bottom-1 right-1 text-gray-500"}>{getTimeElapsed(msg.dateTime)}</span>
        {msg.content}
      </div>
    );
  });

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={onChildClick}
        onBlur={onChildBlur}
        tabIndex={0}
      >
        <span className="absolute bg-red-600 text-gray-100 left-1/2 -top-1/4 w-5 rounded-full text-xs">
          {3}
        </span>
        <img className="h-6" src={data.icon} alt={`navicon-${type}`} />
        <div
          className={`${dropdownClasses} absolute z-10 flex flex-col top-11/12 right-1 transition-all bg-white shadow-md rounded-lg`}
        >
          {dropdownItems}
        </div>
      </div>
    </>
  );
}

export default NavIcon;
