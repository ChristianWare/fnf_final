import styles from "./FormField.module.css";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

// interface LoginValues {
//   email: string;
//   password: string;
// }

interface FormFieldProps<T extends FieldValues> {
  id: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  //   inputClassNames?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors;
}

export default function FormField <T extends FieldValues> ({
  id,
  type,
  disabled,
  placeholder,
  label,
  //   inputClassNames,
  register,
  errors,
}: FormFieldProps<T>) {
  const message = errors[id] && (errors[id]?.message as string);

  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={type} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        {...register(id as Path<T>)}
        className={styles.input}
      />
      {message && <span className={styles.error}>{message}</span>}
    </div>
  );
}
