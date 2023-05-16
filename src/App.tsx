import { useState } from "react";

function App() {
  const [signture, setSignture] = useState("Name");
  const [date, setDate] = useState<null | string>(null);
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSignture(value.toUpperCase());
  };

  return (
    <div className=" bg-slate-500 h-[100vh] relative">
      <div className="font-bold text-4xl flex justify-center flex-col items-center ">
        <div className="mt-7">{signture}</div>
        <div className="mt-7">{date?date:"Date"}</div>
      </div>
      <div className="flex absolute bottom-24 w-full justify-between px-5 ">
        <input onChange={change} type="text" />
        <input
          type="date"
          onChange={(e): void => {
            setDate(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
