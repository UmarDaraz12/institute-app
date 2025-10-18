import { useLocation } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [location]);

  if (!loading) return <Home />;
};

export default Index;
