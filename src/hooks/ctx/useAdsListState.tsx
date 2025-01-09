import { AdsListStateCtx } from "@/context/AdsListProvider";
import { useContext } from "react";

export const useAdsListState = () => {
  const ctx = useContext(AdsListStateCtx);

  if (!ctx) {
    throw new Error("useAdsListState must be used within an AdsListProvider");
  }
  return ctx;
};
