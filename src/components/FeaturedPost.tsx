import getAllPosts from "@/services/posts";

export default async function FeaturedPost() {
  // 1. 데이터 불러오기
  const posts = await getAllPosts();
  // 2. 불러온 데이터 렌더링
  return (
    <section>
      <ul>
        {posts.map((item) => (
          <li key={item.path}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}
