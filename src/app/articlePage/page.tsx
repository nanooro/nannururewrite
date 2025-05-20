import { supabase } from "@/lib/supabaseClient";
import Head from "next/head";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { data: article, error } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !article) {
    return <div>Article not found</div>;
  }

  const articleUrl = `https://nannuru.com/articles/${params.id}`;

  return (
    <>
      <Head>
        <meta property="og:title" content={article.Heading} />
        <meta property="og:description" content={article.subHeading} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content="https://bit.ly/3zzCTUT" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Nannuru" />
      </Head>
    </>
  );
}
