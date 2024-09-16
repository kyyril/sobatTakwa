"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="rounded-full"
      variant={"ghost"}
      size="icon"
      onClick={toggleTheme}
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-colors duration-1000 ${
          theme === "dark"
            ? "rotate-0 scale-0"
            : "rotate-0 scale-100 animate-bounce"
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
          theme === "light"
            ? "rotate-90 scale-0"
            : "rotate-0 scale-100 animate-bounce"
        }`}
      />
    </Button>
  );
}
