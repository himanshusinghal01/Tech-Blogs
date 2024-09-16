import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="w-full flex-col gap-y-1 justify-center items-center ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-semibold text-lg">{post.title}</span>
      </NavLink>
      <p>
        By 
        <span> {post.author} </span>
          on 
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold"> {post.category}</span>
        </NavLink>
      </p>
      <p className="text-slate-500">Posted on {post.date}</p>
      <p className="text-sm">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-500 text-xs">{`#${tag} `}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
