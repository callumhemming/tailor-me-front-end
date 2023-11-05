import { UseFormRegisterReturn } from "react-hook-form";
import { Input as InputComp, Select as SelectComp } from "./Input";

const fakeReg = {} as unknown as UseFormRegisterReturn<any>;

export const Text = () => (
  <InputComp register={fakeReg} label={"text input"} type="text" />
);

export const Select = () => {
  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Sheep", label: "Sheep" },
    { value: "Ant", label: "Ant" },
  ];

  return <SelectComp options={options} register={fakeReg} />;
};

export default {
  component: InputComp,
  title: "atoms/Input",
};
