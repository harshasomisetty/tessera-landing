import Image from "next/image";

const BitBar = () => {
  let images = ["post", "axis", "sports", "fairway"];
  let descriptions = [
    "new album dropping",
    "fully electic rockets",
    "vr rehab",
    "ev charging stations",
  ];

  return (
    <div className="w-1/2 flex flex-row overflow-x-scroll no-scrollbar">
      <div className="flex flex-nowrap space-x-4">
        {images.map((image, ind) => (
          <div className="card card-compact w-48 h-48 bg-base-300">
            <figure>
              <Image
                src={`/images/${image}.png`}
                alt={image}
                width="96"
                height="96"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>{descriptions[ind]}</p>
              <div className="card-actions">
                <button className="btn btn-xs btn-success">Support</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BitBar;
