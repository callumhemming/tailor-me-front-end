import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./Input.module.css";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: "text" | "select" | "doubleSelect";
  register: UseFormRegisterReturn<any>;
};

export const Input = ({
  register,
  label,
  placeholder = label,
  type = "text",
}: InputProps) => (
  <span className={classes.inputContainer}>
    <label className={classes.label}>{label}</label>

    <hr className={classes.hr}></hr>
    <input
      placeholder={placeholder}
      {...register}
      className={classes.input}
      type={type}
    />
  </span>
);

type SelectProps = {
  register?: UseFormRegisterReturn<any>;
  options: Array<{ value: string | number; label: string; selected?: boolean }>;
  label?: string;
  align?: "column" | "row";
};

export const Select = ({
  register,
  options,
  label,
  align = "column",
}: SelectProps) => (
  <span className={clsx(classes.inputContainer, classes[align])}>
    {label && <label className={classes.label}>{label}</label>}
    {align === "column" && <hr className={classes.hr}></hr>}
    <select className={clsx(classes.input, classes.select)} {...register}>
      {options.map(({ value, label, selected }) => (
        <option selected={selected} value={value}>
          {label}
        </option>
      ))}
    </select>
  </span>
);
