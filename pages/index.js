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

      <section>
        <h2>📝エンジニアのブログ</h2>
      <div>
        <article>
          <Link href="/">
          <img src="/images/thumbnail01.jpg" alt="" />
          </Link>
          <Link href="/">
          <a>SSGとSSRの使い分けの場面はいつなのか？</a>
          </Link>
          <br/>
          <small>August 8, 2022</small>
        </article>
      </div>
      </section>
    </Layout>
  );
}
