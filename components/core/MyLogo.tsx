import { useGlobalState } from "@/state/ColorState";
import React from "react";

const MyLogo = () => {
  const name = useGlobalState("name");
  const colors = useGlobalState("colors");
  return <div className="text-sm opacity-75 px-4">coloorio.</div>;
};

export default MyLogo;
