import Head from "next/head";
import styles from "./layut.module.css";

const name = "AdbA";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="images/sibaDog.jpg" alt="profile_image" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
