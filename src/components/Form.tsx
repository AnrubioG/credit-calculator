import { useForm } from "react-hook-form";
import { Credit } from "../types";

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Credit>();

  const calculateMortgage = (data: Credit) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-10 flex flex-col justify-between">
      <div className="flex flex-col mb-10 lg:flex-row items-start lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-cyan-950">
          Amortiza tu Crédito
        </h2>
        <button className=" underline">Reiniciar Formulario</button>
      </div>
      <form
        className="bg-white text-sm text-cyan-950"
        noValidate
        onSubmit={handleSubmit(calculateMortgage)}
      >
        <div className="mb-6">
          <label htmlFor="amount" className="text-md  ">
            Valor del Crédito
          </label>
          <input
            id="amount"
            className="w-full p-3 rounded-md border border-cyan-950 mt-2 "
            type="number"
            placeholder="Monto total de la hipoteca"
            {...register("amount", {
              required: "El valor es un campo requerido",
            })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>

        <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
          <div className="mb-6">
            <label htmlFor="term" className="text-md  ">
              Plazo
            </label>
            <input
              id="term"
              className="w-full p-3 rounded-md border border-cyan-950 mt-2"
              type="number"
              placeholder="Plazo en años"
              {...register("term", {
                required: "El plazo es un campo requerido",
              })}
            />
            {errors.term && <p>{errors.term.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="interest" className="text-md  ">
              Porcentaje de interes
            </label>

            <input
              id="interest"
              className="w-full p-3 rounded-md border border-cyan-950 mt-2"
              type="number"
              placeholder="% de intereses"
              {...register("interest", {
                required: "El interés es un campo requerido",
              })}
            />
            {errors.interest && <p>{errors.interest.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-md ">Seleccione el tipo de cálculo</p>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="amortizacion"
              className="flex items-center w-full p-3 rounded-md border border-cyan-950 mt-2"
            >
              <input
                id="amortizacion"
                type="radio"
                value="1"
                {...register("repaymentOnly", {
                  required: "Debe seleccionar tipo de cálculo",
                })}
              />
              <span className="ml-2">Valor mensual e intereses</span>
            </label>
            <label
              htmlFor="solo-intereses"
              className="flex items-center w-full p-3 rounded-md border border-cyan-950 mt-2"
            >
              <input
                id="solo-intereses"
                type="radio"
                value="2"
                {...register("repaymentOnly", {
                  required: "Debes seleccionar tipo de cálculo",
                })}
              />
              <span className="ml-2">Sólo intereses</span>
            </label>
          </div>
          {errors.repaymentOnly && <p>{errors.repaymentOnly.message}</p>}
        </div>

        <div className="flex flex-row w-4/5 p-3 mt-10 font-bold justify-center gap-3 bg-[#D8DB2F] text-cyan-950 rounded-full cursor-pointer ">
          <span>
            <img src="/img/icon-calculator.svg" alt="" />
          </span>
          <input type="submit" value="Calcular Amortización" />
        </div>
      </form>
    </div>
  );
}
