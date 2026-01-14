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

const title = "Returning to Roblox";

const pubDate = "2025-01-13";

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
            It's been 5 months since I abandoned Roblox after their banning of
            Youtuber Schlep. Things have changed since, but I don't think it's
            enough.
          </p>
          <p>
            The biggest change Roblox has made recently is the requirement of
            age verfication for access to chat features.{" "}
            <a
              href="#ref-1"
              id="subref-1"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [1]
            </a>{" "}
            This is kind of a step in the right direction, but it's not perfect.
          </p>
          <p>
            The reason it isn't perfect is that it divides the platform,
            especially in games that require multiplayer cooperation.
          </p>
          <img
            src="https://cms-media.roblox.com/resize=width:1280,fit:max/dwQA9R1RTO2H4POYbtEr"
            alt="A table of age groups and who they can and can not chat with. Source: Roblox"
            className="max-w-3xl mx-auto rounded-lg"
          />
          <p className="text-sm text-center italic">
            A table of age groups and who they can and can not chat with.
            Source:{" "}
            <a
              href="https://corp.roblox.com/newsroom/2026/01/roblox-age-checks-required-to-chat"
              target="_blank"
              className="underline"
            >
              Roblox
            </a>
          </p>
          <p>
            The use of facial recognition software raises both privacy and
            accuracy concerns. According to the National Institute of Standards
            and Technology (NIST), facial recognition systems have higher error
            rates for certain demographics, particularly women.{" "}
            <a
              href="#ref-2"
              id="subref-2"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [2]
            </a>
          </p>
          <p>
            In the latest report from NIST back in November, facial recognition
            technology has an average error rate of +/- 4 years.{" "}
            <a
              href="#ref-3"
              id="subref-3"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [3]
            </a>{" "}
            This means that a 13-year-old could, at worst, possibly be
            misidentified as 17, allowing for posibly harmful interactions with
            others. On average, the algorithms were accurate within 3 years 48%
            of the time.
          </p>
          <p>
            The company Roblox outsourced for this verification, Persona, has
            previously been sued in Illinois (they lost) over the way it handles
            (or handled, not sure what to use here) user data.{" "}
            <a
              href="#ref-4"
              id="subref-4"
              className="hover:underline text-blue-600 dark:text-blue-400 align-super text-sm"
            >
              [4]
            </a>{" "}
            Justice Davenport of the 3rd District Appellate Court of Illinois
            issued this opinion back in August 2024:
          </p>
          <blockquote className="border-l-4 border-black/50 dark:border-white/50 pl-4 italic my-2">
            <p>
              "The circuit court granted the motion, and plaintiffs appealed.
              For the reasons that follow, we hold Persona has no legitimate
              basis to compel plaintiffs' claims to arbitration. Accordingly, we
              reverse the court's order."
            </p>
          </blockquote>
          <h2 className="text-xl font-bold my-2" id="my-projects">
            My projects
          </h2>
          <p>
            I have a few Roblox-related projects, which{" "}
            <a
              href="/posts/00-roblox-needs-to-switch-paths"
              className="underline"
            >
              I put on hold back in August
            </a>
            . From today, I'll resume development on the following projects:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="/project/scr-platform-sign-redesign-concept"
                className="underline"
              >
                SCR Platform Sign Redesign Concept
              </a>
            </li>
            <li>
              <a href="/project/scr-shift-bot" className="underline">
                SCR Shift Bot
              </a>
            </li>
          </ul>
          <p>Look out for updates on these projects in the near future.</p>
          <p>
            As I finish writing this post, I'm working on a V2 for the platform
            signs, so stay tuned. :)
          </p>
          <p>
            Lastly, I'm continuing my monetary hold on Roblox as well, until
            more significant changes are made.
          </p>
        </div>

        <hr className="my-4 border-black/50 dark:border-white/50" />

        <h2 className="text-xl font-bold mb-2" id="references">
          References
        </h2>

        <ol className="list-decimal list-inside">
          <li id="ref-1">
            <a
              href="#subref-1"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            Kaufman, Matt (2026-01-07). "
            <a
              href="https://corp.roblox.com/newsroom/2026/01/roblox-age-checks-required-to-chat"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              A New Era of Safety: Facial Age Checks Now Required to Chat on
              Roblox
            </a>
            ". <i>Roblox Corporation</i>. Retreived 2026-01-13.
          </li>
          <li id="ref-2">
            <a
              href="#subref-2"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            Boutin, Chad (2024-05-30). "
            <a
              href="https://www.nist.gov/news-events/news/2024/05/nist-reports-first-results-age-estimation-software-evaluation"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              NIST Reports First Results From Age Estimation Software Evaluation
            </a>
            ". <i>National Institute of Standards and Technology</i>. Retreived
            2026-01-13.
          </li>
          <li id="ref-3">
            <a
              href="#subref-3"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            National Institute of Standards and Technology (2025-11-19). "
            <a
              href="https://face.nist.gov/fate/reportcards/aev/daon_001.html"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              Age Estimation Report Card
            </a>
            ". <i>National Institute of Standards and Technology</i>. Retreived
            2026-01-13.
          </li>
          <li id="ref-4">
            <a
              href="#subref-4"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              ^
            </a>{" "}
            3rd District Appellate Court of Illinois (2024-08-13). "
            <a
              href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/8a5ceb88-009c-4059-8e42-6cd0874c5b84/Washington%20v.%20Persona%20Identities,%20Inc.,%202024%20IL%20App%20(3d)%20240210.pdf"
              target="_blank"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              Washington v. Persona Identities, Inc.
            </a>
            ". Retreived 2026-01-13.
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}
