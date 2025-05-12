"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ArticleCard } from "@components/articleCard";
import { Footer } from "@components/footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@components/header";
import SocialCard from "@components/socialCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setArticle(data);
    };

    const fetchAll = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*");

      if (error) console.error(error);
      else setArticles(data);
    };

    fetchArticle();
    fetchAll();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{article.Heading}</h1>
        <p className="text-sm text-gray-500">{article.date}</p>
        <img src={article.imgUrl} alt="" className="my-4 w-full rounded" />
        <p>{article.subHeading}</p>
        <p>{article.content}</p>

        <div className="flex-wrap gap-2 mt-[100px] mb-[100px] scale-[1.2] flex justify-center items-center w-full h-auto">
          <SocialCard
            linkUrl={`https://www.facebook.com/sharer/sharer.php?u=https://nannuru.com/articles/${id}`}
            imgUrl="/2048px-Facebook-f-logo-2021-svg-removebg-preview.png"
            name="facebook"
          />
          <SocialCard
            linkUrl={`https://api.whatsapp.com/send?text=https://nannuru.com/articles/${id}`}
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            name="whatsapp"
          />{" "}
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-[200px]">
          {articles.map((a) => (
            <Link href={`/articles/${a.id}`} key={a.id}>
              <ArticleCard
                imgUrl={a.imgUrl}
                Heading={a.Heading}
                subHeading={a.subHeading}
                date={a.date}
                rating={a.rating}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
