import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/services/posts";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const { title, content, description, date, path } = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center gap-2 self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold">{date.toString()}</p>
        </div>

        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-2xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mb-8"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
