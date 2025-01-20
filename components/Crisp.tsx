"use client";
//@ts-ignore

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`91af6372-1645-4b6b-aac0-f5614d04808c`);
    }
  }, []);

  return null;
};

export default CrispApp;
