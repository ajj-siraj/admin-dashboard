import { getTimeElapsed } from "../util";

function Announcements() {
  let colors = ["#fd1212", "#03ce28", "#0328ce", "#b003ce"];
  colors.sort((a, b) => 0.5 - Math.random())

  let msgs = [
    {
      author: "Bob Page",
      date: new Date(`2021-07-12T17:52:28+00:00`),
      content: "Test message from John Smith!",
    },
    {
      author: "Alex Jacobson",
      date: new Date(`2021-06-13T08:35:28+00:00`),
      content: "Test message from John Smith!",
    },
    {
      author: "JC Denton",
      date: new Date(`2021-07-15T12:12:28+00:00`),
      content: "Test message from John Smith!",
    },
    {
      author: "Joseph Manderly",
      date: new Date(`2021-07-15T15:00:28+00:00`),
      content: "Test message from John Smith!",
    },
  ];
  return (
    <>
      {msgs.map((msg, idx) => (
        <div key={`announc-${idx}`} className="relative bg-yellow-50 shadow-md rounded-lg m-5 p-5">
          <author style={{color: colors[idx]}} className="font-bold">{msg.author}</author>
          <p>{msg.content}</p>
          <span className="absolute bottom-1 right-1">{getTimeElapsed(msg.date)}</span>
        </div>
      ))}
    </>
  );
}

export default Announcements;
