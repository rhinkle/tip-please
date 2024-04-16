export interface TipButtonProps {
  percent: number;
  amount: number;
}

export default function TipButton({ percent, amount }: TipButtonProps) {
  return (
    <button className="w-1/3 bg-blue-500 p-5">
      {`${percent}%`}
      <span className="block text-xs">${amount}</span>
    </button>
  );
}
