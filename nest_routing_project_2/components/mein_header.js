import Link from "next/link";

// Tailwind CSS styles
const styles = {
  header: "bg-gray-800 p-4",
  nav: "container mx-auto",
  ul: "flex space-x-4",
  li: "text-white",
  link: "hover:text-gray-400",
};

function MainHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {" "}
          <li className={styles.li}>
            <Link href="/">
              <div className={styles.link}>Home</div>
            </Link>
          </li>{" "}
          <li className={styles.li}>
            <Link href="/news">
              <div className={styles.link}>News</div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/archive">
              <div className={styles.link}>Archive</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
