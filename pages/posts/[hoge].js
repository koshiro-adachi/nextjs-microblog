import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from '../../styles/utils.module.css';
import Head from "next/dist/shared/lib/head";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths /*paths:pathsなので省略している*/,
    fallback: false,
  };
}

export async function getStaticProps(obj) {
    console.log("obj", obj);
  const postData = await getPostData(obj.params.hoge);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}}/>
      </article>
    </Layout>
  );
}
//dangerouslySetInnerHTML=文字列データをhtmlに変換する機能。しかしサニタイズしないと危険を伴う。
//fallback=falseだと404pageを返す。fallback=trueは用意していないurlに飛ばされたときにnext.jsがページを生成しようとする。