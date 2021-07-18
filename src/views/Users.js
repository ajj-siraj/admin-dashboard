import bob from "../imgs/BobPage.png";
import joseph from "../imgs/JosephManderly.jpg";
import alex from "../imgs/AlexJacobson.jpg";
import jc from "../imgs/JCDenton.png";
import admin from "../imgs/admin.png";

function Users() {
  let users = [
    {
      author: {
        name: "Bob Page",
        position: "CEO",
      },
      dateJoined: new Date(`2021-07-12T17:52:28+00:00`),
      profile: bob,
    },
    {
      author: {
        name: "Alex Jacobson",
        position: "Technical Lead",
      },
      dateJoined: new Date(`2021-06-13T08:35:28+00:00`),
      profile: alex,
    },
    {
      author: {
        name: "JC Denton",
        position: "Sales",
      },
      dateJoined: new Date(`2021-07-15T12:12:28+00:00`),
      profile: jc,
    },
    {
      author: {
        name: "Joseph Manderly",
        position: "General Manager",
      },
      dateJoined: new Date(`2021-07-15T15:00:28+00:00`),
      profile: joseph,
    },
    
    {
      author: {
        name: "Demo Admin",
        position: "Admin",
      },
      dateJoined: new Date(`2021-07-15T15:00:28+00:00`),
      profile: admin,
    },
  ];

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div>
        <h1 className="relative text-xl ml-5 mt-2 uppercase font-bold">
          Users
          <span className="absolute top-full left-0 w-11/12 h-1 bg-gray-700 rounded-full"></span>
        </h1>
      </div>
      <div className="grid grid-cols-4 w-full text-center font-bold bg-white shadow-lg mx-auto mt-5 p-5">
        <h2>Photo</h2>
        <h2>Name</h2>
        <h2>Position</h2>
        <h2>Date Joined</h2>
      </div>
      {users.map((user, idx) => {
        return (
          <div
            className="grid grid-cols-4 text-center items-center w-full bg-white shadow-lg mx-auto mt-4 p-5"
            key={`user-${idx}`}
          >
            <div
              className="h-16 w-16 rounded-full mx-auto"
              style={{
                backgroundImage: `url("${user.profile}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div>{user.author.name}</div>
            <div>{user.author.position}</div>
            <div>{user.dateJoined.toDateString()}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
