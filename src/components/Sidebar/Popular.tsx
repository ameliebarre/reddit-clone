import { Link } from "@nextui-org/react";

export default function Popular() {
  return (
    <div className="pt-4">
      <h3 className="font-semibold text-grey-700 mb-2">Popular in</h3>
      <div className="flex flex-col">
        <Link
          href="#"
          className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
        >
          USA
        </Link>
        <Link
          href="#"
          className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
        >
          France
        </Link>
        <Link
          href="#"
          className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
        >
          Italia
        </Link>
        <Link
          href="#"
          className="text-grey-600 hover:text-primary p-2 hover:bg-grey-200 rounded-md"
        >
          Russia
        </Link>
      </div>
    </div>
  );
}
