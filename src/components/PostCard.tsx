import { Post } from "@/services/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/post/${path}`}>
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-lg">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          width={300}
          height={200}
          alt={title}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="bg-green-200 rounded-lg px-2 my-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
