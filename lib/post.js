import path from "path";
import fs from "fs";
import matter from "matter";

const postsDirectory = path.join(process.cwd(), "posts");
//cwd=自分のワークスペースのdirのpostsをパスとして設定する

//mdファイルのデータを取り出す
export function getPostData() {
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
      ...matterResult,
    };
  });
}
