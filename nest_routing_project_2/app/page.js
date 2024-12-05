"use client"
import { usePathname } from "next/navigation";

export default function HomePage() {

  const path = usePathname();
  console.log('path:', path);
  
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
    </div>
  );
}
