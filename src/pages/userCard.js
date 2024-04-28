import profile from "../images/profile.svg";

function UserCard({ id, username, name, email, street, city }) {
  return (
    <div
      key={id}
      className="relative border white pt-3 pl-4 pr-4 pb-8 bg-white border-b-4 border-b-slate-900 sm:flex flex-col gap-2 xl:max-w-80 lg:max-w-10/12 rounded-2xl"
    >
      <div className="flex gap-1">
        <img src={profile} alt="name" className="w-5" />
        <div className="font-bold text-lg text-start">{username}</div>
      </div>
      <div className="font-sm text-lg text-start mt-3">Name: {name}</div>

      <div className="font-sm text-lg text-start">Email: {email}</div>
      <div className="font-sm text-lg text-start">
        Address: {street},{city}
      </div>
    </div>
  );
}

export default UserCard;
