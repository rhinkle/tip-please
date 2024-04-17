"use client";
import TipButton from "./_tip-button/tip-button";
import { USDollar, tipCalc } from "./util";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function TipWindow() {
  const [total, setTotal] = useState<number>();
  const searchParams = useSearchParams();
  const paramsTotal = searchParams.get("total");

  useEffect(() => {
    if (paramsTotal) {
      setTotal(parseInt(paramsTotal));
    }
  }, [paramsTotal]);

  const tipOptions: number[] = [10, 15, 20];

  const tipOptionList = () => {
    return tipOptions.map((tip) => {
      let tipAmount;
      if (total) {
        tipAmount = tipCalc(total, tip);
      }
      return <TipButton key={tip} amount={tipAmount} percent={tip} />;
    });
  };

  return (
    <div className="flex h-full justify-center">
      <div className="flex h-full w-4/5 flex-col justify-center gap-3 align-middle lg:w-1/2">
        <div className="flex flex-col gap-2 text-center">
          {total && <div className="text-5xl">{USDollar.format(total)}</div>}
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
