import { Footer } from "@ui/footer";
import Header from "@ui/header";
import Image from "next/image";
type Props = {
  imgUrl: string;
};

export default function ArticlePage({ imgUrl }: Props) {
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
