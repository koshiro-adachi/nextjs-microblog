import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/post";

export async function getStaticPaths() {
    const paths=getAllPostIds();

    return{
        paths,/*paths:pathsなので省略している*/
        fallback:false
    };
}

export function getStaticProps(props){
    const {params} =props;
}

export default function Post() {
    return (
        <Layout>動的ルーティング設定</Layout>
    );
}