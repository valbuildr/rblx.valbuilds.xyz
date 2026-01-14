"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRightIcon } from "lucide-react";

const posts = [
  {
    slug: "00-roblox-needs-to-switch-paths",
    title: "Roblox needs to switch paths.",
    pubDate: "2025-08-29",
    author: "valbuildr",
  },
  {
    slug: "01-returning-to-roblox",
    title: "Returning to Roblox",
    pubDate: "2026-01-13",
    author: "valbuildr",
  },
  {
    slug: "02-same-work-new-place",
    title: "Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz",
    pubDate: "2026-01-14",
    author: "valbuildr",
  },
];

const authors = {
  valbuildr: {
    img: "https://valbuilds.xyz/pfp.png",
  },
};

export default function Page() {
  const [search, setSearch] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto p-4 px-8">
        <Input
          placeholder="Search posts..."
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />

        <div className="space-y-2">
          {posts
            .filter(
              (post) =>
                !search ||
                post.title.toLowerCase().includes(search.toLowerCase())
            )
            .sort(
              (a, b) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
            )
            .map((post) => (
              <Item
                key={post.slug}
                variant="outline"
                className="mx-auto"
                asChild
              >
                <a href={`/posts/${post.slug}`}>
                  <ItemContent>
                    <ItemTitle>{post.title}</ItemTitle>
                    <ItemDescription>
                      Published {new Date(post.pubDate).toLocaleDateString()} by{" "}
                      <img
                        src={authors[post.author].img}
                        alt={post.author}
                        className="inline-block w-4 h-4 rounded-full"
                      />{" "}
                      {post.author}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <ChevronRightIcon className="size-4" />
                  </ItemActions>
                </a>
              </Item>
            ))}
          {posts.filter(
            (post) =>
              !search || post.title.toLowerCase().includes(search.toLowerCase())
          ).length == 0 && <p>No posts found.</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
