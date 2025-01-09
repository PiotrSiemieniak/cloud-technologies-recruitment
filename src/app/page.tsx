import React from "react";
import { MainPage } from "@/components/views/MainPage/MainPage";
import { getQuote } from "@/lib/services/fetch/getQuote";

export default async function Home() {
  const data = await getQuote();

  return <MainPage quote={data} />;
}
