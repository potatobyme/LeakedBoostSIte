"use client";

import React, { useEffect } from "react";

const Crisp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      // Assign your API key to Tawk_API or use it as needed
      window.Tawk_API.apiKey = "4cc1d20a1d0fc5ba36d22c8007dc3aa66ce913da";

      (function () {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/678dd5e83a84273260717526/1ii10n65t";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);
      })();
    }
  }, []);

  return null; // No UI rendering
};

export default Crisp;
