"use client";

import React from "react";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/elements/FormField";

const feedbackFormSchema = () => {
  return z.object({
    name: z.string(),
    phoneNumber: z.string().min(10),
  });
};

const Feedback = () => {
  const router = useRouter();

  const formSchema = feedbackFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  return (
    <div className="flex flex-col items-start">
      <div>
        <h1 className="">FEEDBACK</h1>
        <p className="text-white/40 text-2.5xl">
          Seeking personalized support?
          <span className="text-white">Request a call from our team</span>{" "}
        </p>

        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            <FormField
              control={form.control}
              name="name"
              label="YOUR NAME"
              placeholder=""
              type="text"
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              label="PHONE NUMBER"
              placeholder=""
              type="number"
            />
          </form>
        </Form>
        <Button>
          <p>Send a Request</p>
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
