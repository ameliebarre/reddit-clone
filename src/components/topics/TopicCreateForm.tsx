"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "@/components/common/FormButton";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left-start" className="min-w-[462px]">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action} className="w-full">
          <div className="flex flex-col gap-6 p-4 w-full">
            <h3 className="text-xl font-semibold">Create a Topic</h3>
            <Input
              radius="sm"
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              className="w-full"
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              radius="sm"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />

            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormButton>Create a topic</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
