"use client";
import { useEffect } from "react";
import { SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import MultiStep from "react-multistep";
import { Input, Select } from "../../atoms/Input";
import { useAgeRange, useMeasurement } from "../../hooks";
import { useUser } from "../../hooks/useUser";
import classes from "./Form.module.css";
type FormInputs = {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  chestMeasurements: { cent: number; milli: number };
  waistMeasurements: { cent: number; milli: number };
  hipMeasurements: { cent: number; milli: number };
};

type FormProps = {};

export const Form = ({}: FormProps) => {
  const {
    register,
    handleSubmit: submitHandler,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const { addUser, users, getAllUsers } = useUser();

  useEffect(() => {
    console.log(users);
  }, [users]);

  const { convertToMill } = useMeasurement();
  const handleSubmit: SubmitHandler<FormInputs> = async (data) => {
    const chestMeasurement = convertToMill(
      data.chestMeasurements.cent,
      data.chestMeasurements.milli
    );
    const hipMeasurement = convertToMill(
      data.hipMeasurements.cent,
      data.hipMeasurements.milli
    );
    const waistMeasurement = convertToMill(
      data.waistMeasurements.cent,
      data.waistMeasurements.milli
    );

    const payload = {
      email: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      waistMeasurement: Number(waistMeasurement),
      hipMeasurement: Number(hipMeasurement),
      chestMeasurement: Number(chestMeasurement),
    };

    await addUser(payload);
    getAllUsers();
  };

  const registrations: Record<string, UseFormRegisterReturn<any>> = {
    username: register("username"),
    firstName: register("firstName"),
    lastName: register("lastName"),
    age: register("age"),
    chestCent: register("chestMeasurements.cent"),
    chestMilli: register("chestMeasurements.milli"),
    waistCent: register("waistMeasurements.cent"),
    wasitMilli: register("waistMeasurements.milli"),
    hipCent: register("hipMeasurements.cent"),
    hipMilli: register("hipMeasurements.milli"),
  };

  return (
    <BaseForm
      registrations={registrations}
      onSubmit={submitHandler(handleSubmit)}
    />
  );
};

type BaseFormProps = {
  onSubmit: () => void;
  registrations: Record<string, UseFormRegisterReturn<any>>;
};

export const BaseForm = ({ onSubmit, registrations }: BaseFormProps) => {
  const ages = useAgeRange();
  const { centOptions, milliOptions } = useMeasurement();
  return (
    <div className={classes.root}>
      <MultiStep
        prevButton={{
          style: {
            padding: "12px 24px",
            marginLeft: "90px",
          },
        }}
        nextButton={{
          style: {
            padding: "12px 24px",
          },
        }}
      >
        <StepOne
          username={registrations.username}
          firstName={registrations.firstName}
          lastName={registrations.lastName}
        />
        <StepTwo age={registrations.age} options={ages} />
        <StepThree
          chestCent={registrations.chestCent}
          chestMilli={registrations.chestMilli}
          waistCent={registrations.waistCent}
          waistMilli={registrations.wasitMilli}
          hipCent={registrations.hipCent}
          hipMilli={registrations.hipMilli}
          centOptions={centOptions}
          milliOptions={milliOptions}
        />
        <form className={classes.subContainer} onSubmit={onSubmit}>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </form>
      </MultiStep>
    </div>
  );
};

const StepOne = ({ username, firstName, lastName }) => (
  <form className={classes.form}>
    <Input register={username} label="Username" placeholder="Add a username" />
    <Input
      register={firstName}
      label="First name"
      placeholder="Your first name"
    />
    <Input register={lastName} label="Last name" placeholder="Your last name" />
  </form>
);

const StepTwo = ({ age, options }) => (
  <form className={classes.form}>
    <Select label="What's your age" register={age} options={options} />
  </form>
);

const StepThree = ({
  chestCent,
  chestMilli,
  waistCent,
  waistMilli,
  hipCent,
  hipMilli,
  centOptions,
  milliOptions,
}) => (
  <form className={classes.form}>
    <span className={classes.selector}>
      <label className={classes.label}>Chest:</label>
      <Select
        align="row"
        label="cm"
        register={chestCent}
        options={centOptions}
      />
      <Select
        align="row"
        label="mm"
        register={chestMilli}
        options={milliOptions}
      />
    </span>
    <span className={classes.selector}>
      <label className={classes.label}>Waist: </label>
      <Select
        align="row"
        label="cm"
        register={waistCent}
        options={centOptions}
      />
      <Select
        align="row"
        label="mm"
        register={waistMilli}
        options={milliOptions}
      />
    </span>
    <span className={classes.selector}>
      <label className={classes.label}>Hip: </label>
      <Select align="row" label="cm" register={hipCent} options={centOptions} />
      <Select
        align="row"
        label="mm"
        register={hipMilli}
        options={milliOptions}
      />
    </span>
  </form>
);
