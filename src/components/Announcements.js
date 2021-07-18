import { getTimeElapsed } from "../util";
import bob from "../imgs/BobPage.png";
import joseph from "../imgs/JosephManderly.jpg";
import alex from "../imgs/AlexJacobson.jpg";
import jc from "../imgs/JCDenton.png";

function Announcements() {
  let colors = ["#fd1212", "#03ce28", "#0328ce", "#b003ce"];
  let backgrounds = ["bg-yellow-100", "bg-blue-100", "bg-green-100", "bg-pink-100"];
  colors.sort(() => 0.5 - Math.random());
  backgrounds.sort(() => 0.5 - Math.random());

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi, esse mollitia dolorum cumque porro dolores magni nesciunt, ad maiores, dolor voluptas repudiandae hic? Eos iste aliquam obcaecati ut rem \
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi, esse mollitia dolorum cumque porro dolores magni nesciunt, ad maiores, dolor voluptas repudiandae hic? Eos iste aliquam obcaecati ut rem. \
    Lorem ipsum sit amet consectetur adipisicing elit. Tempore animi, esse mollitia dolorum cumque porro dolores magni nesciunt, ad maiores, dolor voluptas repudiandae hic? Eos iste aliquam obcaecati ut rem.";
  let msgs = [
    {
      author: {
        name: "Bob Page",
        position: "CEO",
      },
      date: new Date(`2021-07-12T17:52:28+00:00`),
      content: lorem,
      profile: bob,
    },
    {
      author: {
        name: "Alex Jacobson",
        position: "Technical Lead",
      },
      date: new Date(`2021-06-13T08:35:28+00:00`),
      content: lorem,
      profile: alex,
    },
    {
      author: {
        name: "JC Denton",
        position: "Sales",
      },
      date: new Date(`2021-07-15T12:12:28+00:00`),
      content: lorem,
      profile: jc,
    },
    {
      author: {
        name: "Joseph Manderly",
        position: "General Manager",
      },
      date: new Date(`2021-07-15T15:00:28+00:00`),
      content: lorem,
      profile: joseph,
    },
  ];

  msgs.sort((a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      {msgs.map((msg, idx) => (
        <div
          key={`announc-${idx}`}
          className={`${backgrounds[idx]} relative shadow-md rounded-lg m-5 p-5 pb-10 text-justify`}
        >
          <div className="flex gap-2">
            <div
              className="h-8 w-8 rounded-full"
              style={{
                backgroundImage: `url("${msg.profile}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <span style={{ color: colors[idx] }} className="font-bold">
              {msg.author.name}
            </span>
            <div className="text-gray-500">| {msg.author.position}</div>
          </div>
          <p>{msg.content}</p>
          <span className="absolute bottom-5 right-5 text-gray-600">{getTimeElapsed(msg.date)}</span>
        </div>
      ))}
      <button className="w-full p-5 bg-blue-200 hover:bg-yellow-200">View All Announcements</button>
    </>
  );
}

export default Announcements;
