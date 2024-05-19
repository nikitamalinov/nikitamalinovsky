import Head from "next/head";
import React, { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

export default function SeoLayout({ children }: Props) {
  return (
    <div className="flex flex-col relative">
      <Head>
        <title>Nikita Malinovsky</title>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="Nikita Malinovsky Website" />
        <meta
          name="keywords"
          content="Nikita, Malinovsky, Nikita Malinovsky, website, personal website"
        />
        <meta name="author" content="Nikita Malinovsky" />
        <meta
          name="description"
          content="Nikita Malinovsky's personal website."
        />
        <meta property="image" content="/nikita.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:title" content="Nikita Malinovsky" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Nikita Malinovsky's personal website."
        />
        <meta property="og:image" content="/gitauto.png" />
      </Head>
      {children}
    </div>
  );
}
