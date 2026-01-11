import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Rating } from "primereact/rating";
import { useState } from "react";
import { IoStar } from "react-icons/io5";

export function DialogDemo({ children, movie, handleRatingClick }) {
  const [value, setValue] = useState(8);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <div className="text-center space-y-4">
          <div className="">
            <div className="flex justify-center mb-1">
              <IoStar className=" text-3xl" />
            </div>
            <h1 className="text-xs text-yellow-400 font-medium">RATE THIS</h1>
            <p>{movie?.title}</p>
          </div>
          <div className="flex justify-center ">
            <Rating
              value={value}
              cancel={false}
              onChange={(e) => setValue(e.value)}
              stars={10}
            />
          </div>
          <DialogClose asChild>
            <button
              className="bg-slate-50/50 text-black text-sm font-semibold px-16 py-2 rounded-full"
              onClick={() => handleRatingClick(value)}
            >
              Rate
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
