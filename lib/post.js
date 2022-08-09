import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
//cwd=自分のワークスペースのdirのpostsをパスとして設定する

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  //postsDirのデータを配列として取り出す
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //ファイル名(id)取得

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    //一つ一つのパスを取得している
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //ファイル名を文字列として読み取る

    const matterResult = matter(fileContents);
    //matterを使ってファイルからデータを取得する
    //title,date,thumbnailがオブジェクト形式で格納されている

    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  console.log('aaaaaaaaaaaaaaaaa',allPostsData)
  return allPostsData;
}

//getStaticPathで使うpath取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        hoge: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
/*
getAllPostIdsにreturnされるもの
[{params: {id: "XXXX"}},...]
*/

//id(file名)に基づいてブログの投稿データを返す
export async function getPostData(id) {

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);
  //matterResult.content(これはただの文字列な為mdをhtmlに変えるlibが必要)
  const blogContent = await remark()
    .use(html) //htmlに変換
    .process(matterResult.content); //取得したcontentデータをhtmlに変換

  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}
