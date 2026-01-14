"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, InfoIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const title = "Roblox needs to switch paths.";

const pubDate = "2025-08-29";

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
          <AlertCircle />
          <AlertTitle>Content Warning</AlertTitle>
          <AlertDescription>
            This post indirectly mentions child predators.
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="mb-4">
          <InfoIcon />
          <AlertTitle>
            This post was originally written on{" "}
            {new Date("2025-08-29").toLocaleDateString()}.
          </AlertTitle>
          <AlertDescription>
            It's been transferred to this website from{" "}
            <a href="http://scr.valbuilds.xyz/posts/00-roblox-needs-to-switch-paths">
              the original
            </a>{" "}
            on {new Date("2026-01-14").toLocaleDateString()}.
          </AlertDescription>
        </Alert>

        <div className="space-y-2">
          <p>
            Roblox has always had an issue with predators. It's not a new thing,
            but those who try to help fix the problem have recently faced
            consequences from Roblox themself.{" "}
            <a
              href="#ref-1"
              id="subref-1"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [1]
            </a>
          </p>
          <p>
            When Roblox faced backlash from banning Youtuber Schlep, who's known
            for catching predators on the platform, they doubled down on their
            stance to remove vigilantes from the platform.{" "}
            <a
              href="#ref-2"
              id="subref-2"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [2]
            </a>
          </p>
          <p>
            For the majority of my life, I've been playing Roblox. I'm deeply
            saddened with how things are going. I've made the decision to hault
            all of my Roblox-related projects, including this website, until
            things change. Minor updates, like fixing typos and security fixes
            will still occur.
          </p>
          <p>
            Louisiana's Attorney General has filed a lawsuit against Roblox for
            creating "an online environment where child sex predators thrive,
            unite, hunt and victimize kids".{" "}
            <a
              href="#ref-3"
              id="subref-3"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [3]
            </a>{" "}
            As of the writing of this post, Louisiana is the only state that has
            done this. (Though Florida's AG has issued subpoenas.{" "}
            <a
              href="#ref-4"
              id="subref-4"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [4]
            </a>{" "}
            )
          </p>
          <p>
            So, what can you do? I'm not one to say what to and what not to do,
            but you could start with cancelling your Roblox Premium
            subscription, if you have one. I've decided to boycott Roblox
            entirely.
          </p>
          <p>
            <b>TL;DR:</b> All of my Roblox-related projects will not receive
            major updates until meaningful change is made at Roblox.
          </p>
        </div>

        <hr className="my-4 border-black/50 dark:border-white/50" />

        <h2 className="text-xl font-bold mb-2">References</h2>

        <ol className="list-decimal list-inside">
          <li id="ref-1">
            <a
              href="#subref-1"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            Trioli, Virginia (2025-08-29). "
            <a
              href="https://www.abc.net.au/news/2025-08-30/roblox-banned-predator-hunter-schlep-gaming-kids-watching/105711644"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              Roblox has booted paedophile hunter Schlep. Who's watching out for
              the kids now?
            </a>
            ". <i>ABC News</i>. Retreived 2025-08-29.
          </li>
          <li id="ref-2">
            <a
              href="#subref-2"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            Kaufman, Matt (2025-08-13). "
            <a
              href="https://corp.roblox.com/newsroom/2025/08/more-on-removal-of-vigilantes-from-roblox"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              More on our Removal of Vigilantes From Roblox
            </a>
            ". <i>Roblox Corporation</i>. Retreived 2025-08-29.
          </li>
          <li id="ref-3">
            <a
              href="#subref-3"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            Robinson, Perry (2025-08-14). "
            <a
              href="https://www.wafb.com/2025/08/14/attorney-general-files-child-protection-lawsuit-against-roblox/"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              Louisiana sues Roblox, alleging child exploitation and safety
              failures
            </a>
            ". <i>WAFB</i>. Retreived 2025-08-29.
          </li>
          <li id="ref-4">
            <a
              href="#subref-4"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            McClellan, Matthew (2025-04-18). "
            <a
              href="https://www.fox13news.com/news/florida-attorney-general-subpoenas-roblox-over-child-safety-concerns"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              Florida attorney general subpoenas Roblox over child safety
              concerns
            </a>
            ". <i>FOX 13 Tampa Bay</i>. Retreived 2025-08-29.
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}
