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
    <label>{label}</label>

    <input
      placeholder={placeholder}
      {...register}
      className={classes.input}
      type={type}
    />
  </span>
);

type SelectProps = {
  register: UseFormRegisterReturn<any>;
  options: Array<{ value: string | number; label: string }>;
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
    {label && <label>{label}</label>}
    <select {...register}>
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  </span>
);
