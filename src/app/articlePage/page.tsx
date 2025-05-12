// import { ArticlePageBody } from "@components/articlePageBody";
import { Footer } from "@components/footer";
import Header from "@components/header";
import Image from "next/image";

export default function Body() {
  return (
    <>
      {" "}
      <Header />
      <div className="w-[100%] h-[100%] p-5  outline" id="articleBody">
        <Image
          src="/2048px-Facebook-f-logo-2021-svg-removebg-preview.png"
          alt="The grand resort"
          fill
          className="object-cover rounded-xl"
        />{" "}
      </div>
      <Footer></Footer>
    </>
  );
  // return <ArticlePageBody />;
}

// return (
//   <>
//     {" "}
//     <Header />
//     <div className="w-[100%] h-[100%] p-5  outline" id="articleBody">
//       {/* <Image
//         src={imgUrl}
//         alt="The grand resort"
//         fill
//         className="object-cover rounded-xl"
//       />{" "} */}
//     </div>
//     <Footer></Footer>
//   </>
// );
