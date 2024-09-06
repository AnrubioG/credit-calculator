export default function Information() {
  return (
    <>
      <div className="flex flex-col p-10 text-center gap-5">
        <img
          src="/illustration-empty.svg"
          alt="Ilustracion calculadora"
          className="h-48 w-auto"
        />
        <h2 className="text-2xl text-white font-bold">
          Aquí se mostrarán los resultados
        </h2>
        <p className="text-[#94B2C6]">
          Completa el formulario y haz click en{" "}
          <span className="text-[#D8DB2F]">"calcular amortización"</span> para
          poder ver la amortización mensual
        </p>
      </div>
    </>
  );
}
