// App.js
import "./App.css";
import React, { useState } from "react";
import Navbar from "./pages/navbar.js";
import Footer from "./pages/footer.js";
import UserLists from "./controllers/userList.js";
import PostLists from "./controllers/postList.js";

function App() {
  const [activeList, setActiveList] = useState("post");

  return (
    <div className="App">
      <Navbar setActiveList={setActiveList} />
      {activeList === "post" && <PostLists />}
      {activeList === "user" && <UserLists />}
      <Footer />
    </div>
  );
}

export default App;
