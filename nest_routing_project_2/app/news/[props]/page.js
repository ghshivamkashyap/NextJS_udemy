import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const SingleNews = (params) => {
  console.log("Params: ", params);

  let newsItem = DUMMY_NEWS.find((news) => news.slug === params.params.props);
  console.log("News Item: ", newsItem);

  if (!newsItem) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">
          News item not found!
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {newsItem.title}
      </h1>
      <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
      <div className="flex justify-center">
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="rounded-lg w-full max-h-96 object-cover mb-6"
        />
      </div>
      <p className="text-lg text-gray-700">{newsItem.content}</p>
    </article>
  );
};

export default SingleNews;
