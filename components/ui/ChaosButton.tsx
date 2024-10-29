"use client";

import { Button } from "./Button";
import { applyRandomColors, resetColors } from "@/utils/colors";
import { useState } from "react";

export function ChaosButton() {
  const [chaosActive, setChaosActive] = useState(false);

  const handleChaos = () => {
    applyRandomColors();
    setChaosActive(true);
  };

  const handleReset = () => {
    resetColors();
    setChaosActive(false);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleChaos} className="font-bold hover:animate-pulse">
        Chaos
      </Button>
      {chaosActive && (
        <Button onClick={handleReset} variant="outline" className="font-bold">
          Reset Colors
        </Button>
      )}
    </div>
  );
}
