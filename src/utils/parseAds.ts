import { AdRowElementType } from "@/components/ui/AdRowElement";

export const parseAds = (ads: AdRowElementType[]): AdRowElementType[] => {
  return ads.map((ad) => ({
    ...ad,
    startDate: new Date(ad.startDate),
    endDate: new Date(ad.endDate),
  }));
};