import SocialCard from "@ui/socialCard";
export default function Socials({ linkUrl, imgUrl, name }) {
  return (
    <div className=" w-auto h-auto " id="fbCard">
      <SocialCard linkUrl={linkUrl} imgUrl={imgUrl} name={name} />
    </div>
  );
}
