"use client";
import { ArrowRight, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { ColorProps } from "../ui/types";
import MyLogo from "./MyLogo";
import { navColors } from "../hardcoded/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { setGlobalState, useGlobalState } from "@/state/ColorState";
import CustomColorChanging from "./CustomColorChanging";

const NavigationBar = () => {
  return (
    <div className="wrapper fixed z-50 w-full top-3 -translate-x-1/2 left-1/2 flex items-center justify-between px-3 py-2.5  bg-secondary rounded-xl">
      <div>
        <MyLogo />
      </div>
      <div className="flex items-center gap-0.5">
        <div>
          <ColorChanger />
        </div>
        <Button>Sign up</Button>
        <ModeToggle />
        {/* <CustomColorChanging /> */}
      </div>
    </div>
  );
};

const ColorChanger = () => {
  const colors = {
    name: useGlobalState("name")[0],
    colors: useGlobalState("colors")[0],
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="relative ">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-lg cursor-pointer  hover:bg-background/25 mr-2 transition-all",
          open ? "bg-background/25" : null
        )}
      >
        <div className="text-sm px-2">{colors.name}</div>
        <div className="flex dark:hidden items-center gap-0.5  ">
          <div
            style={{
              backgroundColor: colors.colors.light.text,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.light.background,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.light.primary,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.light.secondary,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.light.accent,
            }}
            className=" size-5 rounded-md"
          />
        </div>
        <div className=" dark:flex  hidden  items-center gap-0.5 ">
          <div
            style={{
              backgroundColor: colors.colors.dark.text,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.dark.background,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.dark.primary,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.dark.secondary,
            }}
            className=" size-5 rounded-md"
          />
          <div
            style={{
              backgroundColor: colors.colors.dark.accent,
            }}
            className=" size-5 rounded-md"
          />
        </div>
        <div>
          <ChevronsUpDown size={13} />
        </div>

        {/* --- */}
      </div>
      {open && (
        <div>
          <div className="p-3 w-full bg-secondary rounded-xl absolute space-y-1 top-14 z-[60]">
            {navColors
              .filter((item) => item.name != colors.name)
              .map((item, i) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => {
                      if (item.name !== colors.name) {
                        setGlobalState("name", item.name);
                        setGlobalState("colors", item.colors);
                      }
                    }}
                  >
                    <div className="flex items-center  justify-between px-2 py-1 rounded-md cursor-pointer hover:bg-primary/5">
                      <div className="text-sm px-2">{item.name}</div>
                      <div className="flex dark:hidden items-center gap-0.5  ">
                        <div
                          style={{
                            backgroundColor: item.colors.light.text,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.light.background,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.light.primary,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.light.secondary,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.light.accent,
                          }}
                          className=" size-5 rounded-md"
                        />
                      </div>
                      <div className=" dark:flex  hidden  items-center gap-0.5 ">
                        <div
                          style={{
                            backgroundColor: item.colors.dark.text,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.dark.background,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.dark.primary,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.dark.secondary,
                          }}
                          className=" size-5 rounded-md"
                        />
                        <div
                          style={{
                            backgroundColor: item.colors.dark.accent,
                          }}
                          className=" size-5 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            <Link href={"/"}>
              <div className="pt-3 text-xs px-2.5 hover:underline  opacity-75 flex items-center justify-end gap-2">
                <div> See All Pallets</div>
                <div>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
