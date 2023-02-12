import Head from "next/head";

const DOMAIN = "https://precedent.dev";

export default function Meta({
  title = "Gas Saver - Your Personal Fuel Cost Hero",
  description = "Maximize your fuel savings with Gas-Saver, an easy-to-use mileage cost calculator. Track your car's fuel consumption, calculate expenses, and compare costs. Start saving money on gas today!",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
