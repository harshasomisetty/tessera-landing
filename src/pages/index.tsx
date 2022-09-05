import React from "react";
import BitBar from "@/components/BitBar";
import IntroBar from "@/components/IntroCards";
import MissionText from "@/components/MissionText";

const IndexPage = () => {
  return (
    <div>
      <div className="flex flex-row min-h-screen justify-around items-center">
        <div className="flex flex-col space-y-10 m-4 place-items-center">
          <div className="w-full">
            <img src={`/images/tessera.png`} />
            <p className="">/teh (seh) ruh/</p>
          </div>
          <button className="btn w-fit btn-success ">Join Community</button>
        </div>
        <div className="flex flex-col space-y-6 text-2xl overflow-x-hidden place-items-center">
          <BitBar />
          <div className="text-3xl text-center">
            <p>a new way to fundraise</p>
            <p>connecting creators to communities</p>
          </div>
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
