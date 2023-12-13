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
    <Navbar className="bg-white" isBordered maxWidth="full">
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
                "bg-transparent",
                "text-black/90",
                "placeholder:text-default-700/50",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "min-w-[540px]",
                "bg-grey-100",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-white hover:border hover:border-grey-500",
                "group-data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus=true]:border group-data-[focus=true]:border-grey-500",
                "!cursor-text",
              ],
            }}
            startContent={
              <IoSearch className="text-xl text-grey-600 pointer-events-none flex-shrink-0" />
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
