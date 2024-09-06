export function Display() {
  return (
    <>
      <div className="flex flex-col mx-10 gap-7 justify-start h-full pt-10 max-w-[80%]">
        <h2 className="font-bold text-white text-2xl">Tus resultados</h2>
        <p className="text-[#94B2C6]">
          A continuación se muestran los resultados basados en la información
          que has proporcionado.
        </p>
        <div className="p-7 bg-[#0E2431] rounded-md border-t-4 border-t-[#D8DB2F] ">
          <div>
            <p className="text-[#94B2C6]">Tu pago mensual será de:</p>
            <p className="text-[#D8DB2F] text-4xl font-bold">$ 1,000.000</p>
          </div>
          <div className=" mt-7 bg-[#0E2431] border-t-[0.5px] border-t-[#546772c9]">
            <p className="text-[#94B2C6] mt-7">
              Total de intereses a lo largo del plazo:
            </p>
            <p className="font-bold text-white">$ 500.000</p>
          </div>
        </div>
      </div>
    </>
  );
}
