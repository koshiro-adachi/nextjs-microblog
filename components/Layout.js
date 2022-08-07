import Head from "next/head";
import { Children } from "react";

const name = "AdbA";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="images/sibaDog.jpg" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
