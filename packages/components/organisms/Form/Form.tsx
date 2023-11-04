import { SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import classes from "./Form.module.css";
type FormInputs = {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  chestMeasurments: string;
  waistMeasurments: string;
  hipMeasurments: string;
};

type FormProps = {};

export const Form = ({}: FormProps) => {
  const {
    register,
    handleSubmit: submitHandler,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Clicked");
    console.log(data);
  };

  const registrations: Record<string, UseFormRegisterReturn<any>> = {
    username: register("username"),
    firstName: register("firstName"),
    lastName: register("lastName"),
    age: register("age"),
    chestMeasurments: register("chestMeasurments"),
    waistMeasurments: register("waistMeasurments"),
    hipMeasurments: register("hipMeasurments"),
  };

  const registerForm = [
    {
      register: registrations.username,
      label: "Username",
      placeholder: "Add a username",
    },
    {
      register: registrations.firstName,
      label: "First name",
      placeholder: "Add your first name",
    },
    {
      register: registrations.lastName,
      label: "Last name",
      placeholder: "Add your last name",
    },
    {
      register: registrations.age,
      label: "Age",
      placeholder: "How old are you?",
    },
    {
      register: registrations.chestMeasurments,
      label: "Chest measurements",
      placeholder: "Chest measurements",
    },
    {
      register: registrations.waistMeasurments,
      label: "Waist measurements",
      placeholder: "Waist measurements",
    },
    {
      register: registrations.hipMeasurments,
      label: "Hip Measurements",
      placeholder: "Hip measurements",
    },
  ];

  return (
    <BaseForm inputs={registerForm} onSubmit={submitHandler(handleSubmit)} />
  );
};

type BaseFormProps = {
  onSubmit: () => void;
  inputs: Array<{
    register: UseFormRegisterReturn<any>;
    label: string;
    placeholder: string;
  }>;
};

export const BaseForm = ({ onSubmit, inputs }: BaseFormProps) => (
  <form
    className={classes.form}
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {inputs.map(({ register, label, placeholder }) => (
      <Input register={register} label={label} placeholder={placeholder} />
    ))}
    <button className={classes.submit} type="submit">
      Submit!
    </button>
  </form>
);

type InputProps = {
  label: string;
  placeholder?: string;
  type?: "text";
  register: UseFormRegisterReturn<any>;
};

const Input = ({
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
