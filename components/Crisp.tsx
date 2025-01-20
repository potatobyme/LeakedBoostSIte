"use client"; 

import React, { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Ensure the script is added only on the client-side
    if (typeof window !== "undefined") {
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
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

  return null; // This component doesn't render anything on the page
};

export default TawkToWidget;
