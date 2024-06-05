import React from "react";
import PostCard from "../Components/PostCard/postCard";

const BlogPage = () => {
  return <div className=" my-8 grid grid-cols-3 gap-10 gap-y-10">
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
  </div>;
};

export default BlogPage;
