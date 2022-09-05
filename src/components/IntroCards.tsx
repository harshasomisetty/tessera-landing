import { FaCoins } from "react-icons/fa";
import { BsPeopleFill, BsGraphUp } from "react-icons/bs";
const IntroBar = () => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body items-center text-center">
          <FaCoins size={25} />
          <h2 className="card-title">BITS</h2>
          <p>Creators can mint tokens for users to purchase for priveleges</p>
        </div>
      </div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body items-center text-center">
          <BsPeopleFill size={25} />
          <h2 className="card-title">Community</h2>
          <p>Creator-Supporter discover, chat, and group functions</p>
        </div>
      </div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body items-center text-center">
          <BsGraphUp size={25} />
          <h2 className="card-title">Growth</h2>
          <p>Become a day one supporter and grow with your creators</p>
        </div>
      </div>
    </div>
  );
};

export default IntroBar;
