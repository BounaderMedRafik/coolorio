"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div>
      <div className=" hidden dark:block">
        <Button size={"icon"} onClick={() => setTheme("light")}>
          <div>
            <Sun size={15} />
          </div>
        </Button>
      </div>
      <div className="block dark:hidden">
        <Button size={"icon"} onClick={() => setTheme("dark")}>
          <div>
            <Moon size={15} />
          </div>
        </Button>
      </div>
    </div>
  );
}
