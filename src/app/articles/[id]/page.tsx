// app/articles/[id]/page.jsx
import { supabase } from "../../../lib/supabaseClient";
import Header from "@components/header";
import { Footer } from "@components/footer";
import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const { data, error } = await supabase
    .from("Nannuru_articles_table")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return <div>Error loading article</div>;

  return (
    <>
      <Header></Header>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{data.Heading}</h1>
        <p className="text-sm text-gray-500">{data.date}</p>
        <img src={data.imgUrl} className="my-4 w-full rounded" />
        <p>{data.subHeading}</p>
        <p className="">{data.content} </p>
      </div>
      <Footer></Footer>
    </>
  );
}
