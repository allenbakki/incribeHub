import React, { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import UserCard from "../pages/userCard";

export default function UserLists() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers();
      setUsers(userData);
    };

    fetchData();
  }, []);

  return (
    <div className="h-[1000px] overflow-auto ">
      <div className="p-3 pt-5 xl:pl-32 xl:pr-32 pb-20 flex flex-col items-center gap-4 scrollbar-thin scrollbar-thunb-transpaernt scrollbar-slate-100   ">
        <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-rows xl:gap-10 lg:gap-6 gap-6 p-5 ">
          {users.map((item) => {
            return (
              <UserCard
                id={item.id}
                username={item.username}
                name={item.name}
                email={item.email}
                street={item.address.street}
                city={item.address.city}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
