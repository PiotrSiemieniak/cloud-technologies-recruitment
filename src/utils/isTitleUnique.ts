import { AdRowElementType } from "@/components/ui/AdRowElement";

export const isTitleUnique = (
  ads: AdRowElementType[],
  title: string,
  editedAdIndex: number | null
): boolean => {
  return !ads.some((ad, index) => ad.title === title && index !== editedAdIndex);
};