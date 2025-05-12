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

const subscriptionFormSchema = () => {
  return z.object({
    email: z.string(),
  });
};

const Subscription = () => {
  // const router = useRouter();

  const formSchema = subscriptionFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="flex flex-row gap-3 items-end">
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5 mt-4 form"
        >
          <FormField
            containerClassName=""
            control={form.control}
            name="email"
            label="SUBSCRIPTION"
            placeholder="E-mail"
            type="email"
          />
        </form>
      </Form>
      <Button className="btn-primary max-sm:w-full mb-2">Subscribe</Button>
    </div>
  );
};

export default Subscription;
