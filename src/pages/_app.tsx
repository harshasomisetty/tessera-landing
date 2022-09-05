import "@/styles/globals.css";
import React from "react";
import { AppProps } from "next/app";
// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");

import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

// const logo = require("./logo.png");
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <div className="min-h-screen p-3" data-theme="business">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
