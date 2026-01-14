"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import Image from "next/image";
import { Input } from "@/components/ui/input";

// TODO: Make this dynamic
const projects = [
  {
    name: "SCR Shift Bot",
    hero: "/assets/project/scr-shift-bot/hero.png",
    slug: "/project/scr-shift-bot",
  },
  {
    name: "SCR Platform Sign Redesign",
    hero: "/assets/project/scr-platform-sign-redesign/hero.png",
    slug: "/project/scr-platform-sign-redesign",
  },
];

export default function Page() {
  const [search, setSearch] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto p-4 px-8">
        <Input
          placeholder="Search projects..."
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />

        <ItemGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects
            .filter((p) => {
              const q = (search ?? "").toString().toLowerCase().trim();
              if (!q) return true;
              return p.name.toLowerCase().includes(q);
            })
            .map((project, index) => (
              <Item key={index} asChild>
                <a href={project.slug}>
                  <ItemHeader>
                    <Image
                      src={project.hero}
                      alt={project.name}
                      width={512}
                      height={512}
                      className="aspect-square w-full rounded-sm object-cover"
                    />
                  </ItemHeader>
                  <ItemContent>
                    <ItemTitle className="text-xl">{project.name}</ItemTitle>
                  </ItemContent>
                </a>
              </Item>
            ))}

          {projects.filter((p) => {
            const q = (search ?? "").toString().toLowerCase().trim();
            if (!q) return true;
            return p.name.toLowerCase().includes(q);
          }).length === 0 && <p>No projects found.</p>}
        </ItemGroup>
      </main>
      <Footer />
    </div>
  );
}
