import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";

export default async function MessagesLayout({ children }) {
  unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {});
  // const messages = await response.json();
  const messages = getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}