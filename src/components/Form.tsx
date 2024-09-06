import { useForm } from "react-hook-form";
import { Credit } from "../types";
import { useCreditStore } from "../store";

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Credit>();

  const { setRepaymentOnly, calculateMonthlyAmount, calculateTotalInterest } =
    useCreditStore();

  const calculateMortgage = (data: Credit) => {
    setRepaymentOnly(data);
    calculateMonthlyAmount(data);
    calculateTotalInterest(data);
  };

  const handleClick = () => {
    reset();
  };

  return (
    <div className="p-10 flex flex-col justify-between">
      <div className="flex flex-col mb-10 lg:flex-row items-start lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-cyan-950">
          Amortiza tu Crédito
        </h2>
        <button className="underline" onClick={handleClick}>
          Reiniciar Formulario
        </button>
      </div>
      <form
        className="bg-white text-sm text-cyan-950"
        noValidate
        onSubmit={handleSubmit(calculateMortgage)}
      >
        <div className="mb-6">
          <label htmlFor="amount" className="text-md ">
            Valor del Crédito
          </label>
          <div
            className={`flex items-center rounded-md border  border-cyan-950 mt-2 ${
              errors.amount ? " border-red-600" : "  border-cyan-950"
            } `}
          >
            <span
              className={`px-4 py-3 text-center rounded-s-md font-bold ${
                errors.amount
                  ? "bg-red-600 text-white"
                  : " bg-[#E5F2FE] text-[#0E2431]"
              }`}
            >
              $
            </span>
            <input
              id="amount"
              type="number"
              className="w-full ps-4 rounded-e-md py-3 focus:outline-none font-bold"
              {...register("amount", {
                required: "El valor es un campo requerido",
              })}
            />
          </div>
          {errors.amount && (
            <p className="text-red-600 mt-2">{errors.amount.message}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
          <div className="mb-6">
            <label htmlFor="term" className="text-md  ">
              Plazo
            </label>
            <div
              className={`flex items-center rounded-md border  border-cyan-950 mt-2 ${
                errors.amount ? " border-red-600" : "  border-cyan-950"
              } `}
            >
              <input
                id="term"
                className="w-full ps-4 rounded-s-md py-3 focus:outline-none font-bold"
                type="number"
                {...register("term", {
                  required: "El plazo es un campo requerido",
                })}
              />
              <span
                className={`px-4 py-3 text-center rounded-e-md font-bold ${
                  errors.amount
                    ? "bg-red-600 text-white"
                    : " bg-[#E5F2FE] text-[#0E2431]"
                }`}
              >
                meses
              </span>
            </div>
            {errors.term && (
              <p className="text-red-600 mt-2">{errors.term.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="interest" className="text-md  ">
              Interés
            </label>

            <div
              className={`flex items-center rounded-md border  border-cyan-950 mt-2 ${
                errors.amount ? " border-red-600" : "  border-cyan-950"
              } `}
            >
              <input
                id="interest"
                className="w-full ps-4 rounded-s-md py-3 focus:outline-none font-bold"
                type="number"
                {...register("interest", {
                  required: "El interés es un campo requerido",
                })}
              />
              <span
                className={`px-4 py-3 text-center rounded-e-md font-bold ${
                  errors.amount
                    ? "bg-red-600 text-white"
                    : " bg-[#E5F2FE] text-[#0E2431]"
                }`}
              >
                %
              </span>
            </div>

            {errors.interest && (
              <p className="text-red-600 mt-2">{errors.interest.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-md ">Selecciona el tipo de cálculo</p>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="amortizacion"
              className="flex items-center w-full p-3 rounded-md border border-cyan-950 mt-2 hover:border-[#D8DB2F] hover:bg-[#FAFAE0]"
            >
              <input
                id="amortizacion"
                type="radio"
                value="1"
                {...register("repaymentOnly", {
                  required: "Debe seleccionar tipo de cálculo",
                })}
              />
              <span className="ml-2 font-bold">Valor mensual e intereses</span>
            </label>
            <label
              htmlFor="solo-intereses"
              className="flex items-center w-full p-3 rounded-md border border-cyan-950 mt-2 hover:border-[#D8DB2F] hover:bg-[#FAFAE0]"
            >
              <input
                id="solo-intereses"
                type="radio"
                value="2"
                {...register("repaymentOnly", {
                  required: "Debes seleccionar tipo de cálculo",
                })}
              />
              <span className="ml-2 font-bold">Sólo intereses</span>
            </label>
          </div>
          {errors.repaymentOnly && (
            <p className="text-red-600 mt-2">{errors.repaymentOnly.message}</p>
          )}
        </div>

        <input
          type="submit"
          value="Calcular Amortización"
          className="flex flex-row w-4/5 p-3 mt-10 font-bold justify-center gap-3 bg-[#D8DB2F] text-cyan-950 rounded-full cursor-pointer "
        />
      </form>
    </div>
  );
}
