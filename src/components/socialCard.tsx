import Image from "next/image";
import Link from "next/link";

export default function SocialCard({ linkUrl, imgUrl, name }) {
  return (
    <Link href={linkUrl} target="_blank">
      <div className="flex gap-2 justify-center items-center rounded-2xl border bg-white text-black shadow-sm p-4 transition-all w-fit hover:shadow-md">
        {" "}
        <div className="relative w-6 h-6">
          <Image src={imgUrl} alt={name} fill className="object-contain" />
        </div>
        <span className="font-medium text-sm text-black">{name}</span>
      </div>
    </Link>
  );
}
