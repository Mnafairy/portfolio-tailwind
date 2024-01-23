import Button from "./Button";
import Icon from "./Icon";
import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  NestIcon,
  SocketIcon,
  PostgreIcon,
  MongoIcon,
  SassIcon,
  TailwindIcon,
  FigmaIcon,
  CypressIcon,
  StorybookIcon,
  GitIcon,
} from "@/components";
export const Skills = () => {
  const iconData = [
    {
      icon: <JavascriptIcon />,
      iconName: "Javascript",
    },
    {
      icon: <TypescriptIcon />,
      iconName: "Typescript",
    },
    {
      icon: <ReactIcon />,
      iconName: "React",
    },
    {
      icon: <NextIcon />,
      iconName: "Next.js",
    },
    {
      icon: <NodeIcon />,
      iconName: "Node.js",
    },
    {
      icon: <ExpressIcon />,
      iconName: "Express.js",
    },
    {
      icon: <NestIcon />,
      iconName: "Nest.js",
    },
    {
      icon: <SocketIcon />,
      iconName: "Socket.io",
    },
    {
      icon: <PostgreIcon />,
      iconName: "PostgreSQL",
    },
    {
      icon: <MongoIcon />,
      iconName: "MongoDB",
    },
    {
      icon: <SassIcon />,
      iconName: "Sass/Scss",
    },
    {
      icon: <TailwindIcon />,
      iconName: "Tailwindcss",
    },
    {
      icon: <FigmaIcon />,
      iconName: "Figma",
    },
    {
      icon: <CypressIcon />,
      iconName: "Cypress",
    },
    {
      icon: <StorybookIcon />,
      iconName: "Storybook",
    },
    {
      icon: <GitIcon />,
      iconName: "Git",
    },
  ];
  return (
    <div className="py-16 px-4 text-center sm:py-24 sm:px-20 sm:max-w-[1440px] sm:m-auto  ">
      <div className="mb-6 sm:mb-12">
        <Button text="Skills" />
        <p className=" text-lg text-gray-600 mt-4 sm:text-xl">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-wrap gap-y-4 gap-x-12 sm:h-[250px] sm:gap-24 ">
        {iconData.map((e, index) => {
          return <Icon icon={e.icon} iconName={e.iconName} key={index} />;
        })}
      </div>
    </div>
  );
};