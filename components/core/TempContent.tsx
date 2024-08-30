"use client";
import React, { useState } from "react";
import { templates } from "../hardcoded/data";
import { Check, ChevronDown, Copy, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGlobalState } from "@/state/ColorState";
import Portfolio from "../examples/Portfolio";
import PortfolioDark from "../examples/PortfolioDark";
import Authentication from "../examples/Authentication";
import AuthenticationDark from "../examples/AuthenticationDark";

const TempContent = () => {
  const [temp, setTemp] = useState(templates[0]);
  const [open, setOpen] = useState(false);
  const theme = {
    name: useGlobalState("name")[0],
    colors: useGlobalState("colors")[0],
  };
  return (
    <>
      <div className="wrapper pt-24 px-7 flex items-center justify-between">
        <div className=" relative select-none">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="opacity-75 flex w-fit items-center gap-2 cursor-pointer hover:opacity-100"
          >
            <div className="text-sm">{temp}</div>
            <div>
              <ChevronDown
                className={cn(open ? "rotate-180" : null)}
                size={13}
              />
            </div>
          </div>
          {open && (
            <div className="absolute w-[250px] z-20   top-8 rounded-xl p-5 bg-secondary">
              {templates.map((item, i) => {
                return (
                  <div
                    onClick={() => {
                      setTemp(item);
                    }}
                    key={i}
                    className="opacity-75 text-sm py-1 hover:opacity-100 cursor-pointer"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <ColorCoder />
        </div>
      </div>
      <div className="pt-24">
        {temp == "Portfolio" ? (
          <div>
            <div className="block dark:hidden">
              <Portfolio theme={theme} />
            </div>
            <div className=" hidden dark:block">
              <PortfolioDark theme={theme} />
            </div>
          </div>
        ) : temp == "Authentication" ? (
          <div>
            <div className="block dark:hidden">
              <Authentication theme={theme} />
            </div>
            <div className=" hidden dark:block">
              <AuthenticationDark theme={theme} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

const ColorCoder = () => {
  const color = {
    name: useGlobalState("name")[0],
    colors: useGlobalState("colors")[0],
  };
  const [open, setOpen] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(color));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div>
      <div className="relative select-none">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-sm opacity-75 hover:opacity-100 cursor-pointer flex items-center gap-2"
        >
          <div>
            <ChevronDown
              className={cn(open ? " rotate-180" : null)}
              size={13}
            />
          </div>
          <div>{color.name}</div>
        </div>

        {open && (
          <div className="w-[250px] p-5 bg-secondary top-8 rounded-xl absolute -translate-x-full left-full ">
            <div className="text-base font-semibold  opacity-75 flex items-center gap-2">
              <div>
                <Sun size={13} />
              </div>
              <div>Light</div>
            </div>
            <div className="mt-3">
              <CodeColorTemp color={color.colors.light.text} Text={"Text"} />
              <CodeColorTemp
                color={color.colors.light.background}
                Text={"Background"}
              />
              <CodeColorTemp
                color={color.colors.light.primary}
                Text={"Primary"}
              />
              <CodeColorTemp
                color={color.colors.light.secondary}
                Text={"Secondary"}
              />
              <CodeColorTemp
                color={color.colors.light.accent}
                Text={"Accent"}
              />
            </div>

            <div className="text-base mt-4 font-semibold  opacity-75 flex items-center gap-2">
              <div>
                <Moon size={13} />
              </div>
              <div>Dark</div>
            </div>
            <div className="mt-3">
              <CodeColorTemp color={color.colors.dark.text} Text={"Text"} />
              <CodeColorTemp
                color={color.colors.dark.background}
                Text={"Background"}
              />
              <CodeColorTemp
                color={color.colors.dark.primary}
                Text={"Primary"}
              />
              <CodeColorTemp
                color={color.colors.dark.secondary}
                Text={"Secondary"}
              />
              <CodeColorTemp color={color.colors.dark.accent} Text={"Accent"} />
            </div>

            <div className="pt-4">
              <div
                onClick={handleCopy}
                className="flex items-center gap-2 cursor-pointer opacity-75 hover:opacity-100"
              >
                <div className="text-sm ">Copy Theme Object</div>
                <div className={` transition-all `}>
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CodeColorTemp = ({ color, Text }: { color: string; Text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <div
          style={{
            backgroundColor: color,
          }}
          className="size-5 rounded-full "
        />
        <div className="text-sm opacity-75">{Text}</div>
      </div>
      <div className="text-sm opacity-75 flex items-center gap-2">
        <div>{color}</div>
        <div
          className={`opacity-50 hover:opacity-100 transition-all cursor-pointer`}
          onClick={handleCopy}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </div>
      </div>
    </div>
  );
};

export default TempContent;
