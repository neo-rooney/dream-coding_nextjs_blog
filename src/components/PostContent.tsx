import { PostData } from "@/services/posts";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/MarkdownViewer";

export default function PostContent({ post }: { post: PostData }) {
  const { date, title, description, content } = post;
  return (
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
  );
}
