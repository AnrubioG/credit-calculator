import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Credit } from "./types";

type CreditState = {
  monthlyAmount: number;
  totalInterest: number;
  repaymentOnly: string;
  setRepaymentOnly: (data: Credit) => void;
  calculateMonthlyAmount: (data: Credit) => void;
  calculateTotalInterest: (data: Credit) => void;
};

export const useCreditStore = create<CreditState>()(
  devtools((set, get) => ({
    monthlyAmount: 0,
    totalInterest: 0,
    repaymentOnly: "",

    setRepaymentOnly: (data) => {
      set(() => ({
        repaymentOnly: data.repaymentOnly,
      }));
    },

    calculateMonthlyAmount: (data) => {
      const { amount, interest, term } = data;
      const monthlyInterestRate = +interest / 12 / 100;
      const denominator = Math.pow(1 + monthlyInterestRate, +term) - 1;
      const monthlyAmount =
        (+amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, +term)) /
        denominator;

      set(() => ({
        monthlyAmount: Math.round(monthlyAmount),
      }));
    },
    calculateTotalInterest: (data) => {
      const { amount, term } = data;
      const monthlyAmount = get().monthlyAmount;

      if (monthlyAmount > 0) {
        const totalPaid = monthlyAmount * +term;
        const totalInterest = totalPaid - +amount;

        set(() => ({
          totalInterest: totalInterest,
        }));
      } else {
        console.warn(
          "monthlyAmount no está calculado. Por favor, llama a calculateMonthlyAmount primero."
        );
      }
    },
  }))
);
