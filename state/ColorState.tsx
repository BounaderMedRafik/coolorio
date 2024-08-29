import { navColors } from "@/components/hardcoded/data";
import { ColorProps } from "@/components/ui/types";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState<ColorProps>(
  navColors[0]
);

export { setGlobalState, useGlobalState };
