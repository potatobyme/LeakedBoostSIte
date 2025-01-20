"use client";
//@ts-ignore

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`b3ec299b-cc0b-4410-9ab7-e4b52b5144b7`);
    }
  }, []);

  return null;
};

export default CrispApp;
