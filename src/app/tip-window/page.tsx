export default function TipWindow() {
  return (
    <div className="flex flex-col justify-center gap-3">
      <div className="flex flex-col gap-2 text-center">
        <div className="text-5xl">$1.07</div>
        <div className="text-xl">Add Optional Tip</div>
      </div>
      <div className="flex flex-1 justify-center gap-2 text-center text-white">
        <button className="t bg-blue-500 p-5">10%</button>
        <button className="bg-blue-500 p-5">15%</button>
        <button className="bg-blue-500 p-5">20%</button>
      </div>
      <div className="flex flex-col">
        <button>Custom Tip Ammount</button>
        <button>No Tip</button>
      </div>
    </div>
  );
}
