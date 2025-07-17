"use client";

import styles from "./RegisterForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../FormField/FormField";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import GoogleButton from "../GoogleButton/GoogleButton";
import Link from "next/link";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log("data>>>", data);
  };
  return (
    <div className={styles.container}>
      <GoogleButton title='up' />
      <p className={styles.or}>or</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormField
          id='name'
          register={register}
          errors={errors}
          placeholder='name'
          label='name'
        />
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
        <FormField
          id='confirmPassword'
          register={register}
          errors={errors}
          placeholder='Conform Password'
          type='password'
          label='Confirm Password'
        />
        <div className={styles.btnContainer}>
          <FalseButton text='Register' type='submit' btnType='blue' />
        </div>
      </form>
      <footer className={styles.cardFooter}>
        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <Link href='/login' className={styles.link}>
            Sign up
          </Link>
        </p>
      </footer>
    </div>
  );
}
