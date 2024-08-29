import React from "react";
import { ColorProps } from "../ui/types";
import {
  ArrowUpRight,
  Download,
  Github,
  GithubIcon,
  GitPullRequest,
  Instagram,
  Youtube,
} from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";

const socials = [
  {
    icon: <GitPullRequest size={15} />,
    href: "https://github.com/BounaderMedRafik",
  },
  {
    icon: <Instagram size={15} />,
    href: "https://www.instagram.com/bounaderrafik/",
  },
  {
    icon: <Youtube size={15} />,
    href: "https://www.youtube.com/@bounaderrafik",
  },
];

const Portfolio = ({ theme }: { theme: ColorProps }) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.light.background,
        color: theme.colors.light.text,
      }}
    >
      <div>
        <Nav theme={theme} />
      </div>
      <div>
        <Hero theme={theme} />
      </div>
      <div>
        <AboutMe theme={theme} />
      </div>
      <div>
        <Projectos theme={theme} />
      </div>
      <div>
        <Footer theme={theme} />
      </div>
    </div>
  );
};

const Nav = ({ theme }: { theme: ColorProps }) => {
  return (
    <div className="wrapper py-4 flex items-center  justify-between">
      <div className="text-xl opacity-75 font-Martian">
        Mohamed
        <span
          className=" font-black"
          style={{
            color: theme.colors.light.primary,
          }}
        >
          Rafik
        </span>
        .
      </div>
      <div className="flex items-center gap-0.5">
        <a
          href="https://bmed.vercel.app/"
          target="_blank"
          style={{
            backgroundColor: theme.colors.light.primary,
            color: theme.colors.light.background,
          }}
          className="text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-75 transition-all cursor-pointer"
        >
          <div>Talk To Me</div>
          <div>
            <ArrowUpRight size={13} />
          </div>
        </a>
        <div className="flex items-center gap-0.5">
          {socials.map((item, i) => {
            return (
              <a
                href={item.href}
                target="_blank"
                className={buttonVariants({
                  size: "icon",
                  className: "rounded-full",
                })}
                style={{
                  color: theme.colors.light.text,
                  backgroundColor: theme.colors.light.secondary,
                }}
                key={i}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Hero = ({ theme }: { theme: ColorProps }) => {
  return (
    <div className="wrapper  flex pt-12   justify-center flex-col">
      <div className="text-7xl  w-full   font-Martian ">
        <span
          style={{
            color: theme.colors.light.primary,
          }}
          className={`italic`}
        >
          Importance
        </span>{" "}
        Of How You Perseu Your{" "}
        <span
          style={{
            color: theme.colors.light.primary,
          }}
          className=" font-Borel font-black"
        >
          Dreams.
        </span>
      </div>
      <div className=" max-w-md opacity-75 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora
        reiciendis labore.
      </div>
      <div className=" w-full h-96 overflow-hidden mt-5">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://scontent.faae2-3.fna.fbcdn.net/v/t39.30808-6/384127784_228716010195930_2630131328113587474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wPlWXJRStc0Q7kNvgHkWQTs&_nc_ht=scontent.faae2-3.fna&oh=00_AYAyI9vMkeI-QLE4jSVYkIjrRTasgb1Dl8VY7ZE_F3g4CQ&oe=66CD3062"
          alt=""
        />
      </div>
    </div>
  );
};

const AboutMe = ({ theme }: { theme: ColorProps }) => {
  const TechStack = [
    {
      icon: <RiNextjsFill size={40} />,
    },
    {
      icon: <RiTailwindCssFill size={40} />,
    },
    {
      icon: <TbBrandFramerMotion size={40} />,
    },
    {
      icon: <RiSupabaseFill size={40} />,
    },
    {
      icon: <IoLogoFigma size={40} />,
    },
  ];
  return (
    <div className="wrapper pt-24">
      <div className="text-4xl  font-Martian flex items-center justify-between">
        <div>About Me</div>
        <div className="text-base flex items-center  gap-2 cursor-pointer hover:underline">
          <div>Download CV</div>
          <div>
            <Download size={15} />
          </div>
        </div>
      </div>
      <div className="text-sm opacity-75">Lorem ipsum dolor sit amet.</div>
      <div className=" size-52 rounded-3xl overflow-hidden mt-4">
        <img
          className=" w-full h-full object-cover"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429319181_1883029568816825_274685062163849919_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ZOnjHjVpGp8Q7kNvgH66YOs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHYgWsmFDvfF598pw1G9di08BoJb0XoaGFQznAAv44HxA&oe=66EED3DE"
          alt=""
        />
      </div>
      <div className="mt-5">
        <div className="text-xl font-bold">Bounader Mohamed Rafik</div>
        <p className="mt-3">
          Hi, I&apos;m Bounader Mohamed Rafik, a 20-year-old web developer and
          designer fueled by a passion for creative problem-solving within
          software engineering and design. Currently pursuing a degree at Chadli
          Ben Djedid University, I honed my technical foundation at Bouraoui
          Laridi Sadeq High School.
        </p>
        <p className="mt-2">
          Beyond academics, I actively contribute to the local and international
          tech scene through freelance projects. In July 2024, I received a
          gratification certificate for my contribution to the I-TECH scientific
          club, and in March 2023, I secured first place in my university&apos;s
          problem-solving competition. My interest extends into game
          development, where I served as a User Interface Designer for
          &apos;Prism&apos; on itch.io, a project by Vysio Group.
        </p>
        <p className="mt-2">
          Surrounding myself with like-minded individuals is crucial for growth.
          I&apos;m fortunate to have a supportive circle of passionate friends
          including Aymen Melouah, Lamri Siradj, Ramzi Bouhadjar, Lokman Touil,
          and Abderrahman Karamane, among many others.
        </p>
        <div className="text-xl font-bold mt-5">My Tech Stack</div>
        <div className="flex items-center gap-1">
          {TechStack.map((item, i) => (
            <div
              style={{
                color: theme.colors.light.primary,
              }}
              key={i}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projectos = ({ theme }: { theme: ColorProps }) => {
  const proj = [
    {
      title: "Prism",
      description:
        "Prism is a 2D puzzle game developed by Vysio Group. I served as the User Interface Designer And I Really loved it ",
    },
    {
      title: "I-TECH Scientific Club",
      description:
        "I-TECH Scientific Club is a community of students who are passionate about science and technology. I really enjoyed being there between my friends and all",
    },
    {
      title: "POTHOS/UI",
      description:
        "Created in August 2024, PothosUI is an open-source React component library designed to simplify the creation of animated user interfaces. Leveraging the power of Framer Motion for dynamic animations and TailwindCSS for rapid styling, PothosUI offers a collection of pre-built components that can be easily integrated into your projects.",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: theme.colors.light.primary,
        color: theme.colors.light.background,
      }}
      className="wrapper p-5 rounded-3xl mt-14"
    >
      <div className="text-4xl font-Martian flex items-center justify-between">
        <div>Projects</div>
        <div className="text-base flex items-center  hover:underline cursor-pointer   gap-2">
          <div>See All</div>
          <div>
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 mt-7 gap-3">
        {proj.map((item, i) => {
          return (
            <div
              style={{
                backgroundColor: theme.colors.light.background,
                color: theme.colors.light.primary,
              }}
              key={i}
              className="p-5 rounded-3xl "
            >
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="text-xs opacity-75 mt-1.5">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Footer = ({ theme }: { theme: ColorProps }) => {
  return (
    <div className="wrapper p-5 mt-14 flex items-center justify-between">
      <div className="text-sm  opacity-75">Bounader Med Rafik 2024/2025</div>
      <div className="text-sm  opacity-75">meow meow meow {"(=`ω´=)"} </div>
    </div>
  );
};

export default Portfolio;
