"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      radius="sm"
      className="bg-primary text-white"
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
