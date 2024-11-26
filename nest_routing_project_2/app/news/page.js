// import React from "react";
// import Link from "next/link";

// const Newspage = () => {
//   return (
//     <div>
//       <h1>News Page</h1>
//       <p>Welcome to the news page!</p>
//       <div className=" flex flex-col gap-x-4 gap-y-2">
//         <Link href="/news/1">News Article 1</Link>
//         <Link href="/news/2">News Article 2</Link>
//       </div>
//     </div>
//   );
// };

// export default Newspage;

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
