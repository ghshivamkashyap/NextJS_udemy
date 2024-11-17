import React from "react";

const Blog = ({params}) => {
  console.log("params:  ", params?.placeholder);

  return <div>i am single blog via dunamic routing</div>;
};

export default Blog;
