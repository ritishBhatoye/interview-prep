import React from "react";

import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  containerClassName?: string;
  type?: "text" | "email" | "password" | "file" | "number";
}

const FormField = ({
  name,
  control,
  containerClassName,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className={`label py-3 ${containerClassName}`}>{label}</FormLabel>
        <FormControl>
          <Input type={type} className="input" placeholder={placeholder} {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
