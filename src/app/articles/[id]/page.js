import { createClient } from "@supabase/supabase-js";
import Header from "@components/header";
import { Footer } from "@components/footer";
import Link from "next/link";

export default async function ArticlePage({ params }) {
  const supabase = createClient(
    "https://dhnrkykrkxucnmymcekb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobnJreWtya3h1Y25teW1jZWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NDQ2MTMsImV4cCI6MjA2MjEyMDYxM30.4p1CZh8NCSXBjLkWdGvEFMQjSERX9_-FJbBpLAXG9Os"
  );

  const { id } = params;

  const { data, error } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return <div>Error loading article</div>;

  return (
    <>
      <Header />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{data.Heading}</h1>
        <p className="text-sm text-gray-500">{data.date}</p>
        <img src={data.imgUrl} alt="" className="my-4 w-full rounded" />
        <p>{data.subHeading}</p>
        <p>{data.content}</p>
      </div>
      <Footer />
    </>
  );
}
