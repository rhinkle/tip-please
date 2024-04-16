import TipButton from "./_tip-button/tip-button";

export default function TipWindow() {
  return (
    <div className="flex h-full justify-center">
      <div className="flex h-full w-4/5 flex-col justify-center gap-3 align-middle lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-5xl">$1.07</div>
          <div className="text-xl">Add Optional Tip</div>
        </div>
        <div className="flex justify-center gap-2 text-center text-white">
          <TipButton percent={10} amount={0} />
          <TipButton percent={20} amount={0} />
          <TipButton percent={25} amount={0} />
        </div>
        <div className="flex flex-col gap-2">
          <button className="border-2 border-black">Custom Tip Ammount</button>
          <button className="border-2 border-black">No Tip</button>
        </div>
      </div>
    </div>
  );
}
