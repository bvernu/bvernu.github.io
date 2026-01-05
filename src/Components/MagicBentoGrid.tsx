import React from "react";
import MagicBento, { BentoProps } from "./MagicBento";

export interface GridItem {
  content: React.ReactNode;
  color?: string;
  title?: string;
  description?: string;
  label?: string;
}

interface MagicBentoGridProps extends Omit<BentoProps, "children"> {
  items: GridItem[];
}

export default function MagicBentoGrid({
  items,
  ...bentoProps
}: MagicBentoGridProps) {
  return <MagicBento items={items} {...bentoProps} />;
}
