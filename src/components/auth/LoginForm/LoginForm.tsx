"use client";

import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import FormField from "../FormField/FormField";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  return (
    <div className={styles.container}>
      <form action=''>
        <FormField
          id='email'
          register={register}
          errors={errors}
          placeholder='email'
        />
      </form>
    </div>
  );
}
