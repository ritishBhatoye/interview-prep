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
        <Button className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10 max-sm:w-full mt-5">
          Send a Request
        </Button>
      </div>
      <p className="flex-1 mt-auto">Privacy</p>
    </div>
  );
};

export default Feedback;
