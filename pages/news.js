import Head from "next/head";
const { Client } = require("@notionhq/client");

const News = () => {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      <div className="text-lg">Hello</div>
    </div>
  );
};

export async function getStaticProps(context) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const listUsersResponse = await notion.users.list();
  return {
    props: {},
  };
}

export default News;
