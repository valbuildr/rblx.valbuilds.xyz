"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Info,
  Component,
  Brain,
  Lock,
  BookOpen,
  GitMerge,
  MessageSquare,
  PencilRuler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto p-4 px-8">
        <Alert variant="default" className="mb-4">
          <Info />
          <AlertTitle>
            This website is in no way affiliated with Stepford County Railway or
            it's management.
          </AlertTitle>
          <AlertDescription>
            If you need help in-game, please direct your inquiry to the correct
            channel in the{" "}
            <a
              href="https://discord.gg/scr"
              className="underline"
              target="_blank"
            >
              SCR Official Discord
            </a>
            .
          </AlertDescription>
        </Alert>

        <div
          className="rounded-lg border border-black/50 dark:border-white/50 h-100 bg-cover bg-center mb-4"
          style={{
            backgroundImage: "url('/assets/project/scr-shift-bot/shift.png')",
          }}
        >
          <div className="rounded-lg bg-black/50 h-full flex flex-col items-center justify-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2 z-11">
              Custom shifts, made easier.
            </p>
            <p className="text-2xl sm:text-3xl font-medium text-white mb-2 z-11">
              All it takes is one command.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-black/50 dark:border-white/50 h-64 bg-neutral-200 dark:bg-neutral-800 flex justify-between items-center mb-4">
          <div className="p-3">
            <p className="text-2xl font-medium mb-2">
              <Component className="inline-block" /> Simple to understand design
            </p>
            <p>
              Using Discord's new components system, shift announcements look
              amazing and easy to understand.
            </p>
          </div>
          <img
            src="/assets/project/scr-shift-bot/shift.png"
            alt="An example shift announcement."
            className="w-156 h-64 rounded-r-lg object-cover border-l border-black/50 dark:border-white/50"
          />
        </div>

        <div className="rounded-lg border border-black/50 dark:border-white/50 h-64 bg-neutral-200 dark:bg-neutral-800 flex justify-between items-center mb-4">
          <img
            src="/assets/project/scr-shift-bot/shift.png"
            alt="An example shift announcement."
            className="w-156 h-64 rounded-r-lg object-cover border-l border-black/50 dark:border-white/50"
          />
          <div className="p-3">
            <p className="text-2xl font-medium mb-2 text-right">
              <Brain className="inline-block" /> Advanced capabilities
            </p>
            <p className="text-right">
              Track signups, ping signed up users, track attendance, sync with
              server events, and more! Best part, it's all customizable.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-black/50 dark:border-white/50 h-64 bg-neutral-200 dark:bg-neutral-800 flex justify-between items-center mb-4">
          <div className="p-3">
            <p className="text-2xl font-medium mb-2">
              <Lock className="inline-block" /> Built with privacy in mind
            </p>
            <p>The bot is entirely self-hostable and open source.</p>
            <ButtonGroup className="mt-2">
              <Button disabled>
                <BookOpen /> Documentation
              </Button>
              <Button variant="outline" disabled>
                <GitMerge /> Source Code
              </Button>
            </ButtonGroup>
          </div>
          <img
            src="/assets/project/scr-shift-bot/shift.png"
            alt="An example shift announcement."
            className="w-156 h-64 rounded-r-lg object-cover border-l border-black/50 dark:border-white/50"
          />
        </div>

        <div className="flex flex-col justify-center items-center mb-4">
          <p className="text-2xl font-bold mb-1">Resources</p>
          <ButtonGroup className="mt-2">
            <Button variant="outline" disabled>
              <PencilRuler /> Positions Tool
            </Button>
            <Button variant="outline" disabled>
              <MessageSquare /> Support Discord Server
            </Button>
            <Button variant="outline" disabled>
              <BookOpen /> Documentation
            </Button>
          </ButtonGroup>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const meta = {
  name: "SCR Shift Bot",
  hero: "/assets/project/scr-shift-bot/hero.png",
};
