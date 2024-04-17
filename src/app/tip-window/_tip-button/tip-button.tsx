import Link from "next/link";
export interface TipButtonProps {
  percent: number;
  amount: string;
}

export default function TipButton({ percent, amount }: TipButtonProps) {
  return (
    <Link href="/thank-you" className="w-1/3 bg-blue-500 p-5">
      {`${percent}%`}
      <span className="block text-xs">{amount}</span>
    </Link>
  );
}
