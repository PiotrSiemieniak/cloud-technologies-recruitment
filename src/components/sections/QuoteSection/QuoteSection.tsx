import { GetQuoteResponseType } from "@/lib/services/fetch/getQuote";
import { Stack, Typography } from "@mui/material";

export function QuoteSection({ quote }: { quote: GetQuoteResponseType }) {
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography sx={{ fontSize: "18px" }}>{quote.quote}</Typography>
      <Typography align="right">
        {quote.author}, category of {quote.category}
      </Typography>
    </Stack>
  );
}
