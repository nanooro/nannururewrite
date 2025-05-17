"use client";
import Head from "next/head";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { ArticleCard } from "@components/articleCard";
import Header from "@components/header";
import { Footer } from "@components/footer";
import Link from "next/link";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*");

      if (error) console.error(error);
      else setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {articles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <ArticleCard
              imgUrl={article.imgUrl}
              Heading={article.Heading}
              subHeading={article.subHeading}
              date={article.date}
              rating={article.rating}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
