import ArticleRead from "./articleRead";
import { supabase } from "../../../lib/supabaseClient";

export async function generateMetadata({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://your-project.supabase.co/rest/v1/Nannuru_articles_table?id=eq.${id}`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );

  const [data] = await res.json();

  return {
    title: data?.Heading,
    description: data?.subHeading,
    openGraph: {
      title: data?.Heading,
      description: data?.subHeading,
      images: [data?.imgUrl],
      url: `https://www.nannuru.com/articleList/${id}`,
      type: "article",
    },
  };
}

export default function Page() {
  return <ArticleRead />;
}
