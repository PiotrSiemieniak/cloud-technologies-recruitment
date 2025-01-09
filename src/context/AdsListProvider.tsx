import { AdRowElementType } from "@/components/ui/AdRowElement";
import { COUNT_OF_RANDOM_ADS } from "@/lib/const/const";
import { getLoremIpsum } from "@/utils/getLoremIpsum";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { parseAds } from "@/utils/parseAds";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export const AdsListStateCtx = createContext<{
  ads: AdRowElementType[];
  editedAd: number | null;
  isCreatePopupOpen: boolean;
}>({
  ads: [],
  editedAd: null,
  isCreatePopupOpen: false,
});

type AdsListActionType = {
  setAds: (ads: AdRowElementType[]) => void;
  deleteAd: (index: number) => void;
  editAd: (index: number, ad: AdRowElementType) => void;
  createAd: (ad: AdRowElementType) => void;
  clearAllAds: () => void;
  generateRandomAds: () => void;
  showEditPopup: (index: number | null) => void;
  hideEditPopup: () => void;
  showCreateNewAdPopup: () => void;
  hideCreateNewAdPopup: () => void;
};

export const AdsListActionCtx = createContext<AdsListActionType | undefined>(
  undefined
);

export const AdsListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ads, setAds] = useState<AdRowElementType[]>([]);
  const [editedAd, setEditedAd] = useState<number | null>(null);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const storedAds = localStorage.getItem("ads");
    if (storedAds) {
      const parsedAds = parseAds(JSON.parse(storedAds));
      setAds(parsedAds);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("ads", JSON.stringify(ads));
    }
  }, [ads, isInitialized]);

  const generateRandomAds = () => {
    const titleLength = getRandomNumber(1, 5);
    const descLength = getRandomNumber(3, 15);
    const newElements = Array.from({ length: COUNT_OF_RANDOM_ADS }, (_, i) => ({
      title: getLoremIpsum({ length: titleLength, withPeriod: false }),
      desc: getLoremIpsum({ length: descLength }),
      startDate: new Date(`2023-0${i + 1}-01`),
      endDate: new Date(`2023-0${i + 1}-30`),
    }));

    const newArr = ads.concat(newElements);
    setAds(newArr);
  };

  const deleteAd = (index: number) => {
    const newAds = ads.filter((_, i) => i !== index);
    setAds(newAds);
  };

  const editAd = (index: number, ad: AdRowElementType) => {
    const newAds = ads.map((a, i) => (i === index ? ad : a));
    setAds(newAds);
  };

  const showEditPopup = (index: number | null) => setEditedAd(index);
  const hideEditPopup = () => setEditedAd(null);

  const showCreateNewAdPopup = () => {
    setIsCreatePopupOpen(true);
  };

  const hideCreateNewAdPopup = () => {
    setIsCreatePopupOpen(false);
  };

  const createAd = (ad: AdRowElementType) => {
    const newAds = [...ads, ad];
    setAds(newAds);
  };

  const clearAllAds = () => setAds([]);

  return (
    <AdsListStateCtx.Provider value={{ ads, editedAd, isCreatePopupOpen }}>
      <AdsListActionCtx.Provider
        value={{
          setAds,
          createAd,
          deleteAd,
          editAd,
          clearAllAds,
          generateRandomAds,
          showEditPopup,
          hideEditPopup,
          showCreateNewAdPopup,
          hideCreateNewAdPopup,
        }}
      >
        {children}
      </AdsListActionCtx.Provider>
    </AdsListStateCtx.Provider>
  );
};
