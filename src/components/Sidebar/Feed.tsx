import { Link } from "@nextui-org/react";
import { FaLayerGroup } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { MdNewReleases } from "react-icons/md";
import { FaCircleArrowUp } from "react-icons/fa6";
import { IoMdPodium } from "react-icons/io";

export default function Feed() {
  return (
    <div className="flex flex-col mb-4">
      <Link
        href="#"
        className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
      >
        <div className="w-6">
          <MdNewReleases />
        </div>
        New
      </Link>
      <Link
        href="#"
        className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
      >
        <div className="w-6">
          <FaLayerGroup />
        </div>
        All
      </Link>
      <Link
        href="#"
        className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
      >
        <div className="w-6">
          <AiFillFire />
        </div>
        Hot
      </Link>
      <Link
        href="#"
        className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
      >
        <div className="w-6">
          <FaCircleArrowUp />
        </div>
        Rising
      </Link>
      <Link
        href="#"
        className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
      >
        <div className="w-6">
          <IoMdPodium />
        </div>
        Top
      </Link>
    </div>
  );
}
