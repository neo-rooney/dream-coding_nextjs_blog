import { Post } from "@/services/posts";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.path}>{item.title}</li>
      ))}
    </ul>
  );
}
