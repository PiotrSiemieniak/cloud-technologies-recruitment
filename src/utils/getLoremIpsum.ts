import { LoremIpsum } from "@/lib/const/loremIpsum";

type GenerateRandomSentenceProps = {
  length?: number;
  withPeriod?: boolean;
};

export function getLoremIpsum({
  length = 7,
  withPeriod = true,
}: GenerateRandomSentenceProps = {}): string {
  const words = LoremIpsum.split(" ");
  const randomWords = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  });

  let sentence = randomWords.join(" ");
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  if (withPeriod) {
    sentence += ".";
  }

  return sentence;
}