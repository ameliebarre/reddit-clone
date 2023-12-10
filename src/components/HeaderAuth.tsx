"use client";

import React from "react";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";

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
                "border-2 text-primary border-primary",
                "active:border-primary-active active:text-primary-active",
                "group-data-[hover=true]:border-primary-hover group-data-[hover=true]:text-primary-hover",
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
              className={[
                "bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-medium",
              ].join(" ")}
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
