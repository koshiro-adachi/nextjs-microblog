import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>フロントエンドエンジニアになる為修行中の身です。</p>
      </section>

      <div>
        <article>
          <Link>
          <img src="" alt="" />
          </Link>
        </article>
      </div>
    </Layout>
  );
}
