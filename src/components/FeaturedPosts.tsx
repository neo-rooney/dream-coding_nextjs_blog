import { getFeaturedPosts } from "@/services/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  // 1. 데이터 불러오기
  const posts = await getFeaturedPosts();
  // 2. 불러온 데이터 렌더링
  return (
    <section>
      <h2 className="text-xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
