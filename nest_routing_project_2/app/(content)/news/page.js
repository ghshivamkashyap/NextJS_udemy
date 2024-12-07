"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// import { DUMMY_NEWS } from "@/dummy-news";

export default function Newspage() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/news");
        let data = await res.json();
        console.log(data);
        setNewsData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="">News Page</h1>
          <ul className=" flex   gap-x-4">
            {newsData.map((newsItem) => (
              <li key={newsItem.id}>
                <Link href={`/news/${newsItem.slug}`}>
                  <img
                    className=" w-56 h-56 rounded-md"
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                  />
                  <span>{newsItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
