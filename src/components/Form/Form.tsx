import { Button } from "components";
import { Title } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage, InputsContainer, StyledForm, StyledInput } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useExpensesContext } from "context";

interface IFormValues {
  name: string;
  cost: string;
  id: string;
}

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = ({ name, cost }) => {
    setNewExpense({ name, cost, id: uuidv4() });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label={"Add Expense"} />
      <InputsContainer>
        <StyledInput
          type={"text"}
          placeholder={"enter name ..."}
          {...register("name", {
            required: "*name is required",
            maxLength: { value: 15, message: "*max 15 characters" },
            pattern: { value: /^[a-zA-Z\s]*$/, message: "*enter only letters" },
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <StyledInput
          type={"number"}
          placeholder={"enter cost ..."}
          {...register("cost", {
            required: "*cost is required",
            maxLength: { value: 5, message: "*max 5 characters" },
          })}
        />
        {errors.cost && <ErrorMessage>{errors.cost.message}</ErrorMessage>}
      </InputsContainer>
      <Button type={"submit"} label={"Done"} />
    </StyledForm>
  );
};
