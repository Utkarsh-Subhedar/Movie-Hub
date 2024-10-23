import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { getSortingCallbacks } from "./utils/getSortingCallbacks";

const Sort = ({ labels, data, set }) => {
  const sortedData = (ele) => {
    const u = [...data]?.sort(ele.method);
    set(u);
    console.log(u);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full text-md py-1 w-[8rem] border-2  flex justify-around">
        <span>Sort</span>
        <ChevronDown className={`ml-2`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {getSortingCallbacks(labels).map((ele) => (
          <DropdownMenuItem onClick={() => sortedData(ele)}>
            {ele.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
