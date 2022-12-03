import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { Title } from "components/Title/Title";
import { useInput } from "hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage, InputsContainer, StyledForm } from "./styles";

interface IFormValues {
  name: string;
  cost: string;
  test: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const name = useInput();
  const cost = useInput();

  const onSubmit: SubmitHandler<IFormValues> = (expense) => {
    console.log(expense);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label={"Add Expense"} />
      <InputsContainer>
        <Input
          type={"text"}
          placeholder={"enter name ..."}
          {...register("name", {
            required: "*name is required",
            maxLength: { value: 15, message: "*max 15 characters" },
            pattern: { value: /^[A-Za-z]+$/i, message: "*enter only letters" },
          })}
          {...name}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Input
          type={"number"}
          placeholder={"enter cost ..."}
          {...register("cost", {
            required: "*cost is required",
            maxLength: { value: 5, message: "*max 5 characters" },
            valueAsNumber: true,
          })}
          {...cost}
        />
        {errors.cost && <ErrorMessage>{errors.cost.message}</ErrorMessage>}
      </InputsContainer>
      <input
        type="text"
        placeholder="test"
        {...register("test", {
          required: "*test is required",
          maxLength: { value: 5, message: "*max 5 characters" },
          valueAsNumber: true,
        })}
      />
      <Button type={"submit"} label={"Done"} />
    </StyledForm>
  );
};
