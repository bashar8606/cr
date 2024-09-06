import { atom } from "recoil";

export const getUniqueKey = () => {
  const time = new Date().getTime();
  return time;
};

export const CartItems = atom({
  key: `cart_${getUniqueKey()}`,
  default: 1,
});
