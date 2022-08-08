import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostData } from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData(); //id,title,date,thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>フロントエンドエンジニアになる為修行中の身です。</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="tumbnali01"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>August 8, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="tumbnali01"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>August 8, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="tumbnali01"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>August 8, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt="tumbnali01"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>August 8, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
