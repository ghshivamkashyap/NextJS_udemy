import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  console.log("I am being executing on server ");

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />

      <Header />
      {/* flaw  */}
      <a href="/about">
        <div className=" text-green-600 text-4xl font-bold">
          Navigation using a tag{" "}
        </div>
      </a>

      <Link href="/about">
        <div className=" text-green-600 text-4xl font-bold">
          Navigation using 'Link tag{" "}
        </div>
      </Link>
    </main>
  );
}
