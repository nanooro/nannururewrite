import Head from "next/head";
import { supabase } from "@/lib/supabaseClient";

const ArticlePage = ({ article, id }) => {
  const articleUrl = `https://nannuru.com/articles/${id}`;

  return (
    <>
      {article && (
        <Head>
          <meta property="og:title" content={article.Heading} />
          <meta property="og:description" content={article.subHeading} />
          <meta property="og:url" content={articleUrl} />
          <meta property="og:image" content="https://bit.ly/3zzCTUT" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Nannuru" />
        </Head>
      )}

      {/* Article content
      <h1>{article.Heading}</h1>
      <img src={article.imgUrl} alt={article.Heading} />
      <p>{article.subHeading}</p>
      <p>{article.content}</p> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const { data: article, error } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  return {
    props: {
      article,
      id,
    },
  };
}

export default ArticlePage;