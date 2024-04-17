export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function tipCalc(bill: number, tip: number): number | undefined {
  if (tip < 0 || tip > 100) {
    throw new Error("Tip must be between 0 and 100");
  }
  if (bill) {
    return bill * (tip / 100);
  }
  return undefined;
}
