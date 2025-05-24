"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ArticleCard } from "@ui/articleCard";
import { Footer } from "@ui/footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@ui/header";
import SocialCard from "@ui/socialCard";
import Head from "next/head";
import Share from "@ui/share";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ArticlePage() {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [allArticles, setAllArticles] = useState(null);
  const params = useParams();
  const id = params?.id?.toString();

  useEffect(() => {
    if (!id) return; // ✅ Prevents early fetch before id is ready

    async function fetchArticle() {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error("Article not found");
        setAllArticles(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      } else {
        setCurrentArticle(data);
      }
    }

    async function fetchAll() {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*");
      if (!error) setAllArticles(data);
    }

    fetchArticle();
    fetchAll();
  }, [id]);

  // ✅ Prevent rendering if data is not ready
  if (allArticles === null || currentArticle === null) return <div>Loading...</div>;

  if (allArticles === false)
    return (
      <div className="text-center p-4 text-red-500">
        Article not found. Redirecting to home page in 5s...
      </div>
    );

  // ✅ Avoid window undefined during SSR (though you're using "use client", it's still good practice)
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <meta property="og:title" content={currentArticle.Heading} />
        <meta property="og:description" content={currentArticle.subHeading} />
        <meta property="og:image" content="https://bit.ly/3zzCTUT" />
        <meta name="twitter:image" content={`https://nannuru.com${currentArticle.imgUrl}`} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentArticle.Heading} />
        <meta name="twitter:description" content={currentArticle.subHeading} />
      </Head>

      {/* the rest is unchanged UI... */}
      <Header />
      <div className="p-4 max-w-3xl mx-auto">
        <div className="flex">
          <h1 className="text-2xl font-bold">{currentArticle.Heading}</h1>
          <Share className="ml-auto w-tuo h-auto flex" id={id} imageUrl={currentArticle.imgUrl} />
        </div>
        <p className="text-sm text-gray-500">{currentArticle.date}</p>
        <img src={currentArticle.imgUrl} alt="" className="my-4 w-full rounded" />
        <p>{currentArticle.subHeading}</p>
        <p>{currentArticle.content}</p>

        <div className="flex justify-center items-center">
          <p className="mt-12">End</p>
        </div>

        <hr className="my-4 border-t border-gray-300 " />

        <div className="flex-wrap gap-2 mt-[80px] mb-[80px] flex justify-center items-center w-full h-auto">
          <fieldset>
            <legend className="text-3xl font-bold text-gray-700 -ml-6 mb-6">
              Share this article <span>❤️</span>
            </legend>
            <div className="flex-wrap gap-2 scale-[1.2] flex justify-center items-center w-full h-auto">
              <SocialCard
                linkUrl={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                imgUrl="/2048px-Facebook-f-logo-2021-svg-removebg-preview.png"
                name="facebook"
              />
              <SocialCard
                linkUrl={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`}
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                name="whatsapp"
              />
            </div>
          </fieldset>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-[100px]">
          {allArticles.map((a) => (
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