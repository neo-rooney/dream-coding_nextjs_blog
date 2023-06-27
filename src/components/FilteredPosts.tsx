"use client";

import { Post } from "@/services/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const DEFAULT_SELECTED = "all";

export default function FilteredPosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(DEFAULT_SELECTED);
  const filtered =
    selected === DEFAULT_SELECTED
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex gap-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[DEFAULT_SELECTED, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
    </section>
  );
}
