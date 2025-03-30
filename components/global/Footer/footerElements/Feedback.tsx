"use client";
// import ".";
import React from "react";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { z } from "zod";
// import { useRouter } from "next/navigation";
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
  // const router = useRouter();

  const formSchema = feedbackFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  return (
    <div className="flex h-full gap-32 p-12 rounded-3xl bg-black   flex-col items-start">
      <div className="gap-3 flex-col flex items-start">
        <h1 className="text-3xl">FEEDBACK</h1>
        <p className="text-white/40 text-lg md:text-2xl lg:!text-2xl">
          Seeking personalized support? {`  `}
          <span className="text-white"> Request a call from our team</span>{" "}
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
        <Button className="btn-primary max-sm:w-full mt-5">
          Send a Request
        </Button>
      </div>
      <p className="flex-1 mt-auto">Privacy</p>
    </div>
  );
};

export default Feedback;
