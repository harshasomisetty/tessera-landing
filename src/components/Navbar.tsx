import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";

const TABS: string[] = ["mission", "roadmap", "prototype"];
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar rounded-lg bg-neutral border-rounded flex flex-row justify-between border-neutral ">
      <div className="navbar-start">
        <Link href="/">
          <img src={`/images/tessera_logo.png`} />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          {TABS.map((tabName) => (
            <li
              className={`${
                router.pathname.slice(1).split("/")[0] === tabName
                  ? "border-b rounded-none border-primary"
                  : ""
              } `}
              key={tabName}
            >
              <Link href={"/" + tabName}>
                <div>{tabName}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex flex-row space-x-2 "></div>
    </div>
  );
};

export default Navbar;
