import React from "react";
import { ColorProps } from "../ui/types";
import { ArrowRight, User } from "lucide-react";
import { Button } from "../ui/button";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Authentication = ({ theme }: { theme: ColorProps }) => {
  return (
    <div
      style={{
        background: theme.colors.light.background,
      }}
      className=" min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex w-full h-full">
        <div className="w-1/2   h-[80vh]">
          <img
            src="https://cdn.dribbble.com/userupload/16331708/file/original-815d8356999ff80631376746964a7405.jpg?resize=1024x1434"
            alt="background image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 h-full p-12">
          <Form theme={theme} />
        </div>
      </div>
    </div>
  );
};

const Form = ({ theme }: { theme: ColorProps }) => {
  return (
    <div className=" max-w-md mx-auto pt-24">
      <div className=" text-4xl font-Martian flex items-center  justify-between">
        <div>SIGNUP NOW!</div>
        <div
          style={{
            backgroundColor: theme.colors.light.primary,
            color: theme.colors.light.background,
          }}
          className="p-2 rounded-full"
        >
          <User size={15} />
        </div>
      </div>

      <div className="mt-7">
        <div>
          <div>
            <label className="font-semibold  text-sm opacity-75">
              Full Name
            </label>
          </div>
          <div className="mt-0.5">
            <input
              onFocus={(e) => {
                e.target.style.outline = `2px solid ${theme.colors.light.accent}`;
                e.target.style.outlineStyle = "solid";
              }}
              onBlur={(e) => {
                e.target.style.outline = "";
                e.target.style.outlineStyle = "";
              }}
              className=" w-full p-3 rounded-full pl-8 text-sm"
              type="text"
              placeholder="Bounader Med Rafik"
            />
          </div>
        </div>

        <div className="mt-3">
          <div>
            <label className="font-semibold  text-sm opacity-75">Email</label>
          </div>
          <div className="mt-0.5">
            <input
              onFocus={(e) => {
                e.target.style.outline = `2px solid ${theme.colors.light.accent}`;
                e.target.style.outlineStyle = "solid";
              }}
              onBlur={(e) => {
                e.target.style.outline = "";
                e.target.style.outlineStyle = "";
              }}
              className=" w-full p-3 rounded-full pl-8 text-sm"
              type="text"
              placeholder="mohamedrafikbounader@gmail.com"
            />
          </div>
        </div>

        <div className="mt-3">
          <div>
            <label className="font-semibold  text-sm opacity-75">
              Password
            </label>
          </div>
          <div className="mt-0.5">
            <input
              onFocus={(e) => {
                e.target.style.outline = `2px solid ${theme.colors.light.accent}`;
                e.target.style.outlineStyle = "solid";
              }}
              onBlur={(e) => {
                e.target.style.outline = "";
                e.target.style.outlineStyle = "";
              }}
              className=" w-full p-3 rounded-full pl-8 text-sm"
              type="text"
              placeholder="••••••••••••••••••"
            />
          </div>
        </div>

        <div className="mt-3">
          <div>
            <label className="font-semibold  text-sm opacity-75">
              Confirm Password
            </label>
          </div>
          <div className="mt-0.5">
            <input
              onFocus={(e) => {
                e.target.style.outline = `2px solid ${theme.colors.light.accent}`;
                e.target.style.outlineStyle = "solid";
              }}
              onBlur={(e) => {
                e.target.style.outline = "";
                e.target.style.outlineStyle = "";
              }}
              className=" w-full p-3 rounded-full pl-8 text-sm"
              type="text"
              placeholder="••••••••••••••••••"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Button
          style={{
            backgroundColor: theme.colors.light.primary,
          }}
          className=" rounded-full w-full"
        >
          <div className="flex items-center gap-2">
            <div>SIGN UP</div>
            <div>
              <ArrowRight size={15} />
            </div>
          </div>
        </Button>
      </div>

      <div
        style={{
          backgroundColor: theme.colors.light.text,
        }}
        className="my-5 h-px w-1/2 mx-auto"
      />
      <div>
        <div className="text-sm opacity-75">sign up using ...</div>
        <Button
          style={{
            backgroundColor: theme.colors.light.accent,
          }}
          className=" rounded-full w-full mt-3"
        >
          <div className="flex items-center gap-2">
            <div>Google</div>
            <div>
              <BsGoogle size={15} />
            </div>
          </div>
        </Button>

        <Button
          style={{
            backgroundColor: theme.colors.light.accent,
          }}
          className=" rounded-full w-full mt-3"
        >
          <div className="flex items-center gap-2">
            <div>Github</div>
            <div>
              <BsGithub size={15} />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Authentication;
