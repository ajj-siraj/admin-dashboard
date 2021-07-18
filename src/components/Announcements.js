import { getTimeElapsed } from "../util";
import bob from "../imgs/BobPage.png";
import joseph from "../imgs/JosephManderly.jpg";
import alex from "../imgs/AlexJacobson.jpg";
import jc from "../imgs/JCDenton.png";

function Announcements() {
  let colors = ["#fd1212", "#03ce28", "#0328ce", "#b003ce"];
  let backgrounds = ["bg-yellow-100", "bg-blue-100", "bg-green-100", "bg-pink-100"]
  colors.sort(() => 0.5 - Math.random());
  backgrounds.sort(() => 0.5 - Math.random());

  let msgs = [
    {
      author: {
        name: "Bob Page",
        position: "CEO",
      },
      date: new Date(`2021-07-12T17:52:28+00:00`),
      content: "Test message from John Smith!",
      profile: bob,
    },
    {
      author: {
        name: "Alex Jacobson",
        position: "Technical Lead",
      },
      date: new Date(`2021-06-13T08:35:28+00:00`),
      content: "Test message from John Smith!",
      profile: alex,
    },
    {
      author: {
        name: "JC Denton",
        position: "Sales",
      },
      date: new Date(`2021-07-15T12:12:28+00:00`),
      content: "Test message from John Smith!",
      profile: jc,
    },
    {
      author: {
        name: "Joseph Manderly",
        position: "General Manager",
      },
      date: new Date(`2021-07-15T15:00:28+00:00`),
      content: "Test message from John Smith!",
      profile: joseph,
    },
  ];
  return (
    <>
      {msgs.map((msg, idx) => (
        <div key={`announc-${idx}`} className={`${backgrounds[idx]} relative shadow-md rounded-lg m-5 p-5`}>
          <div className="flex gap-2">
            <div
              className="h-8 w-8 rounded-full"
              style={{
                backgroundImage: `url("${msg.profile}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <author style={{ color: colors[idx] }} className="font-bold">
              {msg.author.name}
            </author>
            <div className="text-gray-500">| {msg.author.position}</div>
          </div>
          <p>{msg.content}</p>
          <span className="absolute bottom-5 right-5">{getTimeElapsed(msg.date)}</span>
        </div>
      ))}
      <button className="w-full p-5 bg-blue-200 hover:bg-yellow-200">View All Announcements</button>
    </>
  );
}

export default Announcements;
