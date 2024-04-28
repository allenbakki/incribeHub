import axios from "axios";

async function getPosts() {
  try {
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postsData = postsResponse.data;

    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const usersData = usersResponse.data;

    const userMap = new Map();
    usersData.forEach((user) => {
      userMap.set(user.id, user.username);
    });

    const postsWithUsernames = postsData.map((post) => ({
      ...post,
      username: userMap.get(post.userId) || "Unknown User",
    }));

    return postsWithUsernames;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

async function getUsers() {
  try {
    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const usersData = usersResponse.data;

    return usersData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export default getPosts;
export { getUsers };
