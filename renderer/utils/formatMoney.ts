import Dinero from "dinero.js";

const withNoExtraFormat = (formatedPrice: string) =>
  formatedPrice.replace(/MX/g, "");

const withCustomFormat = (priceString: string) => `${priceString} MXN`;

const formatMoney = (amount: number) => {
  const priceObject = Dinero({ amount: amount * 100, currency: "MXN" });
  const priceString = withNoExtraFormat(priceObject.toFormat("$0,0.00"));
  return withCustomFormat(priceString);
};

export default formatMoney;
