import Link from "next/link";
import { USDollar } from "../util";

export interface TipButtonProps {
  percent: number;
  amount: number | undefined;
}

export default function TipButton({ percent, amount }: TipButtonProps) {
  return (
    <Link href="/thank-you" className="w-1/3 bg-blue-500 p-5">
      {`${percent}%`}
      {amount && (
        <span className="block text-xs">{USDollar.format(amount)}</span>
      )}
    </Link>
  );
}
