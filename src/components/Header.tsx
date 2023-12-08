import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

import HeaderAuth from "@/components/HeaderAuth";
import redditLogo from "public/reddit.svg";

export default function Header() {
  return (
    <Navbar className="mb-6" isBordered maxWidth="full">
      <NavbarBrand>
        <Link href="/">
          <Image
            width={120}
            src={redditLogo}
            alt="Reddit Logo"
            className="test-svg"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input
            type="text"
            classNames={{
              input: [
                "text-black/70 dark:text-white/70",
                "placeholder:text-black/70",
              ],
              inputWrapper: [
                "min-w-[400px]",
                "bg-gray-100",
                "hover:bg-gray-400",
                "!cursor-text",
              ],
            }}
            startContent={
              <IoSearch className="text-xl text-black/50 pointer-events-none flex-shrink-0" />
            }
            size="sm"
            placeholder="Search on Reddit"
            variant="flat"
            radius="full"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
