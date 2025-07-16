import styles from "./FormFields.module.css";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface LoginValues {
  email: string;
  password: string;
}

interface FormFildProps {
  id: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  //   inputClassNames?: string;
  register: UseFormRegister<LoginValues>;
  errors: FieldErrors;
}

export default function FormFields({
  id,
  type,
  disabled,
  placeholder,
  label,
  //   inputClassNames,
  register,
  errors,
}: FormFildProps) {
  const message = errors[id] && (errors[id]?.message as string);

  return (
    <div className={styles.container}>
      {label && <span>{label}</span>}
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        {...register(id as Path<LoginValues>)}
      />
      {message && <span className={styles.error}>{message}</span>}
    </div>
  );
}
