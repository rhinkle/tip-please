import TipButton from "./_tip-button/tip-button";

export default function TipWindow() {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const total = 21.82;
  const tipOptions: number[] = [10, 15, 20];

  const tipOptionList = () => {
    return tipOptions.map((tip) => {
      const tipAmount = total * (tip / 100);
      return (
        <TipButton
          key={tip}
          amount={USDollar.format(tipAmount)}
          percent={tip}
        />
      );
    });
  };

  return (
    <div className="flex h-full justify-center">
      <div className="flex h-full w-4/5 flex-col justify-center gap-3 align-middle lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-5xl">${total}</div>
          <div className="text-xl">Add optional tip</div>
        </div>
        <div className="flex justify-center gap-2 text-center text-white">
          {tipOptions && tipOptionList()}
        </div>
        <div className="flex flex-col gap-2">
          <button className="border-2 border-black">Custom Tip Ammount</button>
          <button className="border-2 border-black">No Tip</button>
        </div>
      </div>
    </div>
  );
}
