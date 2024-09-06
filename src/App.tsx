import { Display } from "./components/Display";
import { Form } from "./components/Form";
// import Information from "./components/Information";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-6xl bg-white rounded-3xl">
        <div className="bg-white w-full md:w-1/2 md:rounded-2xl">
          <Form />
        </div>
        <div className="bg-cyan-950 md:w-1/2 md:rounded-r-3xl md:rounded-bl-[70px] flex items-center justify-center">
          {/* <Information /> */}
          <Display />
        </div>
      </div>
    </>
  );
}

export default App;
