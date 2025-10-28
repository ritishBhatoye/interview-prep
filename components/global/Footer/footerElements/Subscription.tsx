"use client";
// import ".";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { z } from "zod";
// import { useRouter } from "next/navigation";
import FormField from "@/components/elements/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
      <Button className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10 max-sm:w-full mb-2">Subscribe</Button>
    </div>
  );
};

export default Subscription;
