export default function ArticleRead() {
    const [articles, setArticles] = useState([]);
    const params = useParams();
    const id = params?.id;
  
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
  
    const currentArticle = articles.find((a) => a.id === Number(id));
    const currentUrl = `https://www.nannuru.com/articleList/${id}`;
  
    if (!currentArticle) return <div>Loading...</div>;
  
    return (
      <>
  
        <Header />
        <div className="p-4 max-w-3xl mx-auto">
          <div className="flex">
            <h1 className="text-2xl font-bold">{currentArticle.Heading}</h1>
            <Share
              className="ml-auto flex"
              id={id}
              imageUrl={currentArticle.imgUrl}
            />
          </div>
          <p className="text-sm text-gray-500">{currentArticle.date}</p>
          <Image
            src={currentArticle.imgUrl}
            alt=""
            width={800}
            height={400}
            className="my-4 w-full rounded"
          />
          <p>{currentArticle.subHeading}</p>
          <p>{currentArticle.content}</p>
  
          <div className="flex justify-center items-center mt-12">
            <p>End</p>
          </div>
  
          <hr className="my-4 border-t border-gray-300" />
  
          <div className="flex-wrap gap-2 mt-20 mb-20 flex justify-center items-center">
            <fieldset>
              <legend className="text-3xl font-bold text-gray-700 -ml-6 mb-6">
                Share this article <span>❤️</span>
              </legend>
              <div className="flex-wrap gap-2 scale-110 flex justify-center items-center">
                <SocialCard
                  linkUrl={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    currentUrl
                  )}`}
                  imgUrl="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  name="facebook"
                />
                <SocialCard
                  linkUrl={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    currentUrl
                  )}`}
                  imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  name="whatsapp"
                />
              </div>
            </fieldset>
          </div>
  
          <div className="flex flex-wrap gap-4 justify-center mt-24">
            {articles.map((a) => (
              <Link href={`/articles/${a.id}`} key={a.id}>
                <ArticleCard
                  imgUrl={a.imgUrl}
                  Heading={a.Heading}
                  subHeading={a.subHeading}
                  date={a.date}
                  rating={a.rating}
                />
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  function Header() {
    return (
      <div className="flex justify-start items-center m-1 w-auto h-[8vh] bg-white">
        <Link href="/">
          <h1 className="min-text-3xl text-5xl font-bold ">Nannuru</h1>
        </Link>
      </div>
    );
  }
  
  function Footer() {
    return <div className="mt-24"></div>;
  }
  // import ArticleRead from "./ArticleRead";
  import { supabase } from "../../../../lib/supabaseClient";
  
  export async function generateMetadata({ params }) {
    const { id } = params;
    const { data } = await supabase
      .from("Nannuru_articles_table")
      .select("*")
      .eq("id", id)
      .single();
  
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