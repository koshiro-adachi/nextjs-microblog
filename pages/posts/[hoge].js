import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

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
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.blogContentHTML}
    </Layout>
  );
}
