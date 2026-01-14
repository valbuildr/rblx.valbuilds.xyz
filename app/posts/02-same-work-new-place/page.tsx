"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BotMessageSquare } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const title =
  "Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz";

const pubDate = "2025-01-14";

const author = "valbuildr";
const authorImg = "https://valbuilds.xyz/pfp.png";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto p-4 px-8 max-w-7xl mx-auto">
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/">Home</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href="/posts">Posts</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mb-4">
          Published {new Date(pubDate).toLocaleDateString()} by{" "}
          <img
            src={authorImg}
            alt={author}
            className="inline-block w-4 h-4 rounded-full"
          />{" "}
          {author}
        </p>

        <Alert variant="default" className="mb-4">
          <BotMessageSquare />
          <AlertTitle>AI Disclaimer</AlertTitle>
          <AlertDescription>
            Artificial Intelligence tools were used to help make sure this post
            is free of grammatical errors and typos, but they were not used to
            generate content. All opinions expressed here are those of my own.
          </AlertDescription>
        </Alert>

        <div className="space-y-2">
          <p>
            In order to widen my scope and organize all of my projects, I've
            decided to move this website and all of my SCR-related projects to a
            new domain:{" "}
            <a
              href="https://rblx.valbuilds.xyz"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              https://rblx.valbuilds.xyz
            </a>
            .
          </p>
          <p>
            From now on, all of my SCR-related projects will share a website
            with any other Roblox-related projects.
          </p>
          <p>
            scr.valbuilds.xyz website will become read-only, and the Github
            repository will be archived.
          </p>
          <img
            src="/assets/posts/02/move-ad-d.png"
            alt="Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz"
            className="max-w-3xl mx-auto rounded-lg dark:hidden block"
          />
          <img
            src="/assets/posts/02/move-ad-l.png"
            alt="Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz"
            className="max-w-3xl mx-auto rounded-lg hidden dark:block"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
