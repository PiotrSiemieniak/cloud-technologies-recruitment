import { AdsListActionCtx } from "@/context/AdsListProvider";
import { useContext } from "react";

export const useAdsListAction = () => {
  const ctx = useContext(AdsListActionCtx);

  if (!ctx) {
    throw new Error("useAdsListAction must be used within an AdsListProvider");
  }
  return ctx;
};
