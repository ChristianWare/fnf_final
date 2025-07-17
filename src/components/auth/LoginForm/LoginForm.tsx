"use client";

import styles from "./LoginForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import FormField from "../FormField/FormField";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import GoogleButton from "../GoogleButton/GoogleButton";
import Link from "next/link";
import { useState, useTransition } from "react";
import { login } from "../../../../actions/auth/login";
import Alert from "@/components/shared/Alert/Alert";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    setError("");
    startTransition(() => {
      login(data).then((res) => {
        if (res?.error) {
          setError(res.error);
        }
      });
    });
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
          disabled={isPending}
        />
        <FormField
          id='password'
          register={register}
          errors={errors}
          placeholder='password'
          type='password'
          label='password'
          disabled={isPending}
        />
        {error && <Alert message={error} error />}

        <div className={styles.btnContainer}>
          <FalseButton
            // text='Sign In'
            text={isPending ? "Submitting..." : "Sign In"}
            type='submit'
            btnType='blue'
            disabled={isPending}
          />
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
