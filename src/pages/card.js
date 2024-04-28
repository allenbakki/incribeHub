import profile from "../images/profile.svg";

function Card({ id, username, title, body }) {
  return (
    <div
      key={id}
      className="relative border white pt-3 pl-4 pr-4 pb-8 bg-white border-b-4 border-b-slate-900 sm:flex flex-col gap-2 xl:max-w-80 lg:max-w-10/12 rounded-2xl"
    >
      <div className="flex gap-1">
        <img src={profile} alt="name" className="w-5" />
        <div className="font-bold text-lg text-start">{username}</div>
      </div>
      <div className="font-bold text-lg text-start">{title}</div>
      <div className="text-sm text-start">{body}</div>
    </div>
  );
}

export default Card;
