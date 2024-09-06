import { Display } from "./components/Display";
import { Form } from "./components/Form";
import Information from "./components/Information";
import { useCreditStore } from "./store";

function App() {
  const { monthlyAmount, totalInterest } = useCreditStore();
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-6xl bg-white rounded-3xl">
        <div className="bg-white w-full lg:w-1/2 md:rounded-2xl">
          <Form />
        </div>
        <div className="bg-cyan-950 lg:w-1/2 md:rounded-b-3xl md:rounded-r-3xl lg:rounded-bl-[70px] flex items-center justify-center">
          {monthlyAmount || totalInterest ? <Display /> : <Information />}
        </div>
      </div>
    </>
  );
}

export default App;
