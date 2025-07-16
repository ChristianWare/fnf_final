"use client";

import styles from "./LoginForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import FormField from "../FormField/FormField";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import GoogleButton from "../GoogleButton/GoogleButton";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log("data>>>", data);
  };

  return (
    <div className={styles.container}>
      <GoogleButton title='in' />
      <p className={styles.or}>or</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField
          id='email'
          register={register}
          errors={errors}
          placeholder='email'
          label='email'
        />
        <FormField
          id='password'
          register={register}
          errors={errors}
          placeholder='password'
          type='password'
          label='password'
        />
        <div className={styles.btnContainer}>
          <FalseButton text='Sign In' type='submit' btnType='blue' />
        </div>
      </form>
      <footer className={styles.cardFooter}>
        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <Link href='/register' className={styles.link}>
            Sign up
          </Link>
        </p>
      </footer>
    </div>
  );
}
