import React, { useEffect } from "react";
import Router from "next/router";
import Navbar from "@/components/Navbar";
import BitBar from "@/components/BitBar";
import IntroBar from "@/components/IntroCards";
import MissionText from "@/components/MissionText";
import Example from "@/components/Example";

const IndexPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 min-h-screen bg-base-200 justify-items-center items-center">
        <div className="flex flex-col">
          <p className="text-5xl">TESSERA</p>
          <p className="">/teh (seh) ruh/</p>
          <button className="btn w-fit btn-success my-4">Join Community</button>
        </div>
        <div className="w-2/3">
          <BitBar />
          <p>A new way to fundraise</p>
          <p>connecting creators to communities</p>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center space-y-16">
        <MissionText />
        <IntroBar />
      </div>
    </div>
  );
};

export default IndexPage;
