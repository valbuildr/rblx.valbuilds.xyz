"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Laptop, Sun, Moon } from "lucide-react";

export default function ColorModeSwitch() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    setInterval(() => {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        if (prefersDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else if (storedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    });
  }, []);

  return (
    <Select
      value={theme}
      onValueChange={(value) => {
        if (value === "system") {
          localStorage.removeItem("theme");
          setTheme("system");
        } else {
          localStorage.setItem("theme", value);
          setTheme(value);
        }
      }}
    >
      <SelectTrigger className="w-45">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="system">
            <Laptop className="mr-1 h-4 w-4" /> System
          </SelectItem>
          <SelectItem value="light">
            <Sun className="mr-1 h-4 w-4" /> Light
          </SelectItem>
          <SelectItem value="dark">
            <Moon className="mr-1 h-4 w-4" /> Dark
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
