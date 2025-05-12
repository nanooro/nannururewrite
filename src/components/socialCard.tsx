import Image from "next/image";
import Link from "next/link";

export default function SocialCard({ linkUrl, imgUrl, name }) {
  return (
    <Link href={linkUrl} target="_blank">
      <div className="flex items-center gap-3 bg-slate-200 hover:bg-slate-200 text-white px-4 py-2 rounded-xl shadow-md transition-all w-fit">
        <div className="relative w-6 h-6">
          <Image
            src={imgUrl}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <span className="font-medium text-sm text-black">{name}</span>
      </div>
    </Link>
  );
}
