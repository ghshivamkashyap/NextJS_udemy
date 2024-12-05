

import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function Newspage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className=" flex   gap-x-4">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img className=" w-56 h-56 rounded-md"
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
