import React, { useEffect, useState } from "react";
import Card from "../pages/card";
import getPosts from "../api/api";
export default function PostLists() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  console.log(posts);
  return (
    <div className="h-[1000px] overflow-auto ">
      <div className="p-3 pt-5 xl:pl-32 xl:pr-32 pb-20 flex flex-col items-center gap-4 scrollbar-thin scrollbar-thunb-transpaernt scrollbar-slate-100   ">
        <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-rows xl:gap-10 lg:gap-6 gap-6 p-5 ">
          {posts.map((item) => {
            return (
              <Card
                id={item.id}
                username={item.username}
                title={item.title}
                body={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
