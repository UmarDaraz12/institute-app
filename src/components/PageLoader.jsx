import React, { useEffect, useState } from "react";
import logo from "@/assets/logo-png.png";

const PageLoader = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-[9999] transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 animate-bounce"
      />
      <div className="mt-4 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default PageLoader;
