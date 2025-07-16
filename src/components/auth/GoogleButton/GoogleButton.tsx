import styles from "./GoogleButton.module.css";
import GoogleIcon from "@/components/icons/GoogleIcon/GoogleIcon";

interface Props {
  title: string;
}

export default function GoogleButton({ title }: Props) {
  return (
    <form className={styles.form}>
      <button type='submit' className={styles.googleBtn}>
        <GoogleIcon className={styles.google} />
        <span className={styles.googleBtnText}>Sign {title} with Google</span>
      </button>
    </form>
  );
}
