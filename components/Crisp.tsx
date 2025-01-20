"use client"; 

import React, { useEffect } from "react";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "91af6372-1645-4b6b-aac0-f5614d04808c";

      (function () {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }, []);

  return null;
};

export default CrispApp;
