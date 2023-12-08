import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

import { auth } from "@/auth";
import * as actions from "@/actions";
import redditLogo from "public/reddit.svg";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button
                type="submit"
                className="cursor-pointer bg-primary text-white font-medium"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              className={[
                "border-2 border-primary hover:border-primary-hover active:border-primary-active",
                "text-primary hover:text-primary-hover active:text-primary-active",
                "font-medium",
              ].join(" ")}
              variant="bordered"
              radius="full"
            >
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-medium"
              radius="full"
            >
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

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
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
