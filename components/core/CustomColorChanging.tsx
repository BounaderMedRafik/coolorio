import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const CustomColorChanging = () => {
  return (
    <div className="relative">
      <Button size={"icon"}>
        <Plus size={15} />
      </Button>

      <div className=" p-5 absolute z-50 w-[300px]   top-1/2 -translate-y-1/2  left-14  bg-secondary"></div>
    </div>
  );
};

export default CustomColorChanging;
