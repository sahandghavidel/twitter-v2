import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Link from "next/link";
function Trending({ result }) {
  return (
    <a target="_blank" href={result.url}>
      <div className="hover:bg-gray-200  px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
        <div className="space-y-0.5">
          <p className="text-[#6e767d] text-xs font-medium">{result.heading}</p>
          <h6 className="font-bold max-w-[250px] text-sm">{result.title}</h6>
          <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
            {result.source.name}
          </p>
        </div>

        {result.urlToImage ? (
          <img
            src={result.urlToImage}
            width={70}
            height={70}
            className="rounded-xl"
          />
        ) : (
          <div className="icon group">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        )}
      </div>
    </a>
  );
}

export default Trending;
