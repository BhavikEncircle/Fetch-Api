import React, { useEffect, useState } from "react";

const FetchedData = ({ fetchData }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (fetchData) {
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json().then((data) => setPosts(data))
      );
    }
  }, [fetchData]);
  return (
    <div className="flex flex-col gap-2 m-2 ">
      {posts.map((post) => (
        <div className="bg-blue-100 rounded-md p-2 w-150" key={post.id}>
          <h2 className="font-bold text-xl">
            {post.id} - {post.title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed border-t border-blue-50 pt-2">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FetchedData;
