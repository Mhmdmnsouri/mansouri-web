import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export default function Button({
  className = "",
  variant = "solid",
  ...props
}: ButtonProps) {
  const style = variant === "solid" ? "btn-pro" : "btn-ghost";
  return <button {...props} className={`${style} focus-ring ${className}`.trim()} />;
}
