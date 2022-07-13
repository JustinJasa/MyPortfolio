import React, {useState} from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import css from "./navbar.module.css";
import Link from "next/link";
import { Switch } from "antd";
import { useGlobalContext } from "../../contexts/context";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default function Navbar() {

  

  const { toggleTheme, theme } = useGlobalContext();

  // will do later
  // nav bar scrolling

  /*

  const [nav, setNav] = useState(false)

  const showNav = () => { 
    
  }

  */

  // ${css.navbar}

  return (
    <div className={`${css.navbar}`} id={theme}>
      <h2>JJ.</h2>
      {/* <img src={MenuIcon} alt="logo" /> */}
      <li className={css.options}>
        <ul className={css.item}>
          <span>1.</span>Projects
        </ul>
        <ul className={css.item}>
          <span>2.</span>My Learnings
        </ul>
        <ul className={css.item}>
          <span>3.</span>Resume
        </ul>
      </li>
      { theme == "dark" ?
        <MoonIcon className={css.icon} onClick={toggleTheme} /> : <SunIcon className={css.icon} onClick={toggleTheme} />
      }
    </div>
  );
}
