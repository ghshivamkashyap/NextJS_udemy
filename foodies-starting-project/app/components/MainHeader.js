// "use client";
// import Link from "next/link";
// import React from "react";
// import logo from "@/assets/logo.png";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const MainHeader = () => {
//   const path = usePathname();

//   return (
//     <header className="bg-transparent text-white ">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className=" flex gap-x-2 items-center">
//           <Link href="/">
//             {" "}
//             <Image
//               priority
//               src={logo}
//               alt="Foodie's Delight"
//               className="h-14 w-14"
//             />
//             {/* <img src={logo.src} alt="Foodie's Delight" className="h-12" /> */}
//           </Link>

//           <div className="text-2xl font-bold">🍴 Foodie's Delight</div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/meals">
//             {" "}
//             <div
//               className={
//                 path.startsWith("/meals")
//                   ? " text-gray-500 font-bold text-xl"
//                   : ""
//               }
//             >
//               Browse meals
//             </div>{" "}
//           </Link>{" "}
//           <Link href="/community">
//             {" "}
//             <div
//               className={
//                 path == "/community" ? " text-gray-500 font-bold text-xl" : ""
//               }
//             >
//               Community
//             </div>{" "}
//           </Link>{" "}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default MainHeader;

"use client";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <header className="bg-transparent text-white ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="Foodie's Delight"
              className="h-14 w-14"
            />
          </Link>
          <div className="text-2xl font-bold">🍴 Foodie&apos;s Delight</div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/meals">
            <div
              className={
                path.startsWith("/meals")
                  ? "text-gray-500 font-bold text-xl"
                  : ""
              }
            >
              Browse meals
            </div>
          </Link>
          <Link href="/community">
            <div
              className={
                path == "/community" ? "text-gray-500 font-bold text-xl" : ""
              }
            >
              Community
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
