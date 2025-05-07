import { Footer } from "@components/footer";
import Header from "@components/header";
import Image from "next/image";

export default function ArticlePage({ imgUrl }) {
  return (
    <>
      {" "}
      <Header></Header>
      <div className="w-[100%] h-[100%] p-5  outline" id="articleBody">
        <Image
          src={imgUrl}
          alt="The grand resort"
          fill
          className="object-cover rounded-xl"
        />{" "}
      </div>
      <Footer></Footer>
    </>
  );
}
