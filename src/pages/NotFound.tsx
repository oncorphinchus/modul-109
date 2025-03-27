
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cloud-light p-6">
      <div className="glass rounded-2xl p-12 text-center max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-azure mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button 
          className="button-primary flex items-center gap-2 mx-auto"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
