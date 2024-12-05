import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const years = getAvailableNewsYears();
  console.log("years", years);
  return (
    <nav className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <ul className="flex flex-wrap justify-center space-x-4">
        {years.map((year) => (
          <li key={year}>
            <Link
              href={`/archive/${year}`}
              className="text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded transition-colors duration-300 ease-in-out"
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArchivePage;
