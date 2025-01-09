import { NINJA_API_KEY } from "../../const/const";

export type GetQuoteResponseType = {
  quote: string;
  author: string;
  category: string;
}

const KEY = NINJA_API_KEY;

export async function getQuote(): Promise<GetQuoteResponseType[]> { 
  const rawData = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": KEY
  }});
  const data = await rawData.json();

  return data;
}