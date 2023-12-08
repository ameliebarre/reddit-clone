"use client";

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

import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import redditLogo from "public/reddit.svg";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ""} />
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

  return authContent;
}
