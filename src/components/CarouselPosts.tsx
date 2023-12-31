import { getNonFeaturedPosts } from "@/services/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-xl font-bold my-2">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
}
