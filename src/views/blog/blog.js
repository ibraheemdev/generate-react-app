import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto my-2 text-center">
      <div className="text-3xl text-blue-500 font-bold my-4">Blog</div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2">
        Generated with create-react-app <br/> Setup Tailwind CSS with PostCSS and
        autoprefixer <br/> Setup PurgeCSS in production <br/> Uses Redux as state management
        solution, and redux-saga middleware for asynchronous requests.
      </button>
    </div>
  );
};

export default Blog;
