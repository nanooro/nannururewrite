import Head from "next/head";

const ArticlePage = ({ article, id }) => {
  const articleUrl = `https://nannuru.com/articles/${id}`;

  return (
    <>
      <Head>
        <meta property="og:title" content={article.Heading} />
        <meta property="og:description" content={article.subHeading} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={article.imgUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Nannuru" />
        {/* Other meta tags as needed */}
      </Head>

      {/* Article content
      <h1>{article.Heading}</h1>
      <img src={article.imgUrl} alt={article.Heading} />
      <p>{article.subHeading}</p>
      <p>{article.content}</p> */}
    </>
  );
};

export default ArticlePage;
