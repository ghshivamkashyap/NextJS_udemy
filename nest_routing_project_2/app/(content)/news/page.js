import Link from "next/link";

export default async function Newspage() {
  const res = await fetch("http://localhost:4000/news");
  let data = await res.json();
  return (
    <>
      {0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="">News Page</h1>
          <ul className=" flex   gap-x-4">
            {data.map((newsItem) => (
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
